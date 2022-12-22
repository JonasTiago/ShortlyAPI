import { Router } from "express";
import { createUrlShort, findUrlId, shortUrl } from "../controllers/urlController.js";
import shortUrlMiddleware from "../middlewares/shortUrlMiddleware.js";
import urlValidate from "../middlewares/urlValidateMiddleware.js";

const router = Router();

router.post("/urls/shorten", urlValidate, createUrlShort);
router.get("/urls/:id", findUrlId)
router.get("/urls/open/:shortUrl", shortUrlMiddleware, shortUrl)

export default router;
