import { Router } from "express";
import { createUser } from "../controller/user";

export const userRouter = Router();

userRouter.post("/", createUser as any);
