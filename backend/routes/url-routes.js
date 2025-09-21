
import { addUrl, getUrls, deleteUrl } from "../controllers/url-controller.js";
import express from "express";
import { isLoggedInMiddleware } from "../middlewares/auth-midlewares.js";

const urlRouter = express.Router();

urlRouter.post("/", isLoggedInMiddleware, addUrl);
urlRouter.get("/", isLoggedInMiddleware, getUrls);
urlRouter.delete("/:id", isLoggedInMiddleware, deleteUrl);

export default urlRouter;