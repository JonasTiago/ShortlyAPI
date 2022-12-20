import { Router } from "express";
import { signup } from "../controllers/authController.js";
import signupValidate from "../middlewares/authSignupMiddleware.js";

const router = Router();

router.post("/signup", signupValidate, signup);

export default router;
