import { Router } from "express";
import { postUser, postToken } from "./controller";

const userRouter: Router = Router()

userRouter.post("/", postUser)
userRouter.post("/token", postToken)

export default userRouter