import { Router } from "express";
import { createUrlShort, findUrlId } from "../controllers/urlController.js";
import urlValidate from "../middlewares/urlValidateMiddleware.js";

const router = Router();

router.post("/urls/shorten", urlValidate, createUrlShort);
router.get("/urls/:id", findUrlId)

export default router;
