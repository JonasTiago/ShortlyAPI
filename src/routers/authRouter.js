import { Router } from "express";
import {
  myShortlys,
  rankingVisualization,
  signin,
  signup,
} from "../controllers/userController.js";
import signinValidate from "../middlewares/signinValidateMiddleware.js";
import signupValidate from "../middlewares/signupValidateMiddleware.js";
import shortUrlValide from "../middlewares/uservalidMiddleware.js";

const router = Router();

router.post("/signup", signupValidate, signup);
router.post("/signin", signinValidate, signin);
router.get("/users/me", shortUrlValide, myShortlys);
router.get("/ranking", rankingVisualization);

export default router;
