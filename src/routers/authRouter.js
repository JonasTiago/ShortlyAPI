import { Router } from "express";
import { signin, signup } from "../controllers/userController.js";
import signinValidate from "../middlewares/signinValidateMiddleware.js";
import signupValidate from "../middlewares/signupValidateMiddleware.js";

const router = Router();

router.post("/signup", signupValidate, signup);
router.post("/signin", signinValidate, signin);

export default router;
