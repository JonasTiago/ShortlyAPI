import { Router } from "express";
import { createUser } from "../controllers/userController.js";
import userValidate from "../middlewares/validateUserMiddleware.js";

const router = Router();

router.post("/signup", userValidate, createUser);

export default router;
