import prisma from "../../providers/prisma/prisma.provider";

class UserService {
  async createUser(email: string, passHash: string) {
    await prisma.user.create({
      data: {
        email: email,
        password: passHash,
      },
    });
  }
}

export default UserService;
