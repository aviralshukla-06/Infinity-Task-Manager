import { Response, NextFunction } from "express";
import { AuthRequest } from "../types";
import jwt, { JwtPayload } from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const secret = process.env.JWT_SECRET;
if (!secret) {
    throw new Error("JWT_SECRET is not defined in environment variables");
}

export const userMiddleware = (
    req: AuthRequest,
    res: Response,
    next: NextFunction
): void => {
    const authHeader = req.headers.authorization;
    const token = authHeader?.split(" ")[1]; // Extract Bearer token

    if (!token) {
        res.status(401).json({ message: "Token missing" });
        return;
    }

    try {
        const decoded = jwt.verify(token, secret) as JwtPayload;
        if (decoded.id) {
            req.userId = decoded.id as string;
            next();
        } else {
            res.status(401).json({ message: "Invalid token payload" });
        }
    } catch {
        res.status(403).json({ message: "Invalid or expired token" });
    }
};
