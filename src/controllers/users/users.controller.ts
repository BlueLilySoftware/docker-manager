import { Request, Response } from "express";
import passwordService from "../../services/password";
import userService from "../../services/users";

class UserController {
  async registerUserHandle(req: Request, res: Response) {
    const email = req.params.email;
    const password = req.params.password;

    const userExists = await userService.getUserByEmail(email);

    if (userExists) {
      return res.status(400).json({ data: { error: "User already exists." } });
    }

    const hash = await passwordService.generateHash(password);

    await userService.createUser(email, hash);

    return res
      .status(200)
      .json({ data: { message: "User created successfully." } });
  }
}

export default UserController;
