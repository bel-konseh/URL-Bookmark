import express from "express";
import { signUpUser, loginUser } from "../controllers/auth-controllers.js";
import { isLoggedInMiddleware } from "../middlewares/auth-midlewares.js";

const authRouter = express.Router();

authRouter.post("/register", signUpUser);
authRouter.post("/login", loginUser);

export default authRouter;