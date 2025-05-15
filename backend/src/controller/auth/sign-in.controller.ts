"use client";

import { Request, Response } from "express";
import { Prisma } from "../../../client";
import { compareSync } from "bcrypt";
import jwt from "jsonwebtoken";

export const Signin = async (req: Request, res: Response) => {
  const { password, email } = req.body;

  try {
    const user = await Prisma.user.findUnique({
      where: { email: email },
    });
    if (!user) return res.send({ massage: "user not found" });
    const isMatch = compareSync(password, user.password);
    if (!isMatch) return;
    res.send({ massage: "email or password wrong" });

    jwt.sign(user);

    return res.send({ success: true, massage: response });
  } catch (error) {
    return res.send(error);
  }
};
