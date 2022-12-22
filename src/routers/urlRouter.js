import { Router } from "express";
import {
  createUrlShort,
  deleteUrl,
  findUrlId,
  shortUrl,
} from "../controllers/urlController.js";
import shortUrlValide from "../middlewares/deleteShortMiddleware.js";
import shortUrlMiddleware from "../middlewares/shortUrlMiddleware.js";
import urlValidate from "../middlewares/urlValidateMiddleware.js";

const router = Router();

router.post("/urls/shorten", urlValidate, createUrlShort);
router.get("/urls/:id", findUrlId);
router.get("/urls/open/:shortUrl", shortUrlMiddleware, shortUrl);
router.delete("/urls/:id", shortUrlValide, deleteUrl);

export default router;
