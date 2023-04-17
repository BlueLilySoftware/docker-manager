import { Request, Response, Router } from "express";
import UserController from "../controllers/users/users.controller";
import passport from "../providers/passport/passport.provider";

const userRouter = Router();
const userController = new UserController();

userRouter.post(
  "/login",
  passport.authenticate("local"),
  (req: Request, res: Response) => {}
);

userRouter.post("/register", userController.registerUserHandle);

export default userRouter;
