import express from "express";
// import { PrismaClient } from "@prisma/client";
import { indexRouter } from "./routes";
import dockerRouter from "./routes/docker.route";

// export const prisma = new PrismaClient();

export const app = express();

app.use("/", indexRouter);
app.use('/docker', dockerRouter)
