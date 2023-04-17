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

  async getUserByEmail(email: string) {
    const user = await prisma.user.findFirst({
      where: {
        email: email,
      },
    });

    return user;
  }
}

export default UserService;
