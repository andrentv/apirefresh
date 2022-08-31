import { sign } from "jsonwebtoken";

class GenerateTokenProvider {
  async execute(userId: string) {
    const token = sign({}, process.env.SIGN_TOKEN, {
      subject: userId,
      expiresIn: "50s",
    });

    return token;
  }
}

export { GenerateTokenProvider };
