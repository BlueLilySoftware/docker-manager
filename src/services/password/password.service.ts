import bcrypt from "bcrypt";
import userService from "../users";

class PasswordService {
  async generateHash(plain: string) {
    const SALT_ROUNDS = 10;
    const hash = await bcrypt.hash(plain, SALT_ROUNDS);
    return hash;
  }

  verifyHash(candidate: string, hash: string) {
    const match = bcrypt.compareSync(candidate, hash);
    return match;
  }
}

export default PasswordService;
