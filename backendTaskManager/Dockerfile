FROM node:22-alpine

WORKDIR /app

COPY ./package* .

RUN npm install

COPY . .

RUN npm run build

ENV MONGO_URL=""
ENV JWT_SECRET=""

EXPOSE 3000

CMD [ "node", "index.js" ]