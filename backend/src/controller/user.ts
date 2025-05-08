import { Request, response, Response } from "express";
import { prisma } from "../utils/prisma";

export const createUser = async (req: Request, res: Response) => {
  const { email, password, username } = req.body;
  try {
    await prisma.user.create({
      data: {
        password: password,
        email: email,
        name: username,
      },
    });

    return res.send({
      success: true,
      massage: response,
    });
  } catch (error) {
    return res.send(error);
  }
};
