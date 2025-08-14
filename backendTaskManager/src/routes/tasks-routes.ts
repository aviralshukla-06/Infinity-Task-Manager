import { Request, Response } from "express";
import express, { Router, json } from "express"

import { Task } from "../db";
const taskRouter = Router();

taskRouter.post("/tasks", async (req: Request, res: Response): Promise<void> => {

})



export default taskRouter;
