import { Router } from "express";
import { createUrlShort } from "../controllers/urlController.js";
import urlValidate from "../middlewares/urlValidateMiddleware.js";

const router = Router();

router.post("/urls/shorten", urlValidate, createUrlShort);

export default router;
