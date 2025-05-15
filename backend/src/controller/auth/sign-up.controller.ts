import { Request, Response } from "express";
import { prisma } from "@prisma/client";
import bcrypt from "bcrypt";

const checkUser = (req: Request, res: Response) => {
  const { username } = req.body;
  try {
    const user = await prisma.user.findUnique({ where: { name: username } });
    if (user) {
      return res.send({ massage: "username already taken" });
    }
    return res.send({ massage: "username available" });
  } catch (error) {}
};

export const Signup = async (req: Request, res: Response) => {
  const { username, password, email } = req.body;

  const hashedPassword = bcrypt.hashSync(password, 10);

  try {
    const response = await prisma.user.create({
      data: {
        email,
        username,
        name: username,
      },
    });
    return res.send({ success: true, massage: response });
  } catch (error) {
    return res.send(error);
  }
};
