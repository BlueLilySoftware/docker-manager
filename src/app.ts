import express from "express";
// import { PrismaClient } from "@prisma/client";
import { indexRouter } from "./routes";
import dockerRouter from "./routes/docker.route";
import userRouter from "./routes/users.route";
import passport from "./providers/passport/passport.provider";

// export const prisma = new PrismaClient();

// TODO: Needs to setup Postgress database to finish auth system
// TODO: Needs to setup DATABASE_URL variable in the .env file

export const app = express();

app.use(passport.initialize());

app.use("/", indexRouter);
app.use("/docker", dockerRouter);
app.use("/user", userRouter);
