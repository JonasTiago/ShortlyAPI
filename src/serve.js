import express from "express";
import cors from "cors";
import signupRouter from "./routers/authRouter.js";

const app = express();
app.use(express.json());
app.use(cors());
app.use(signupRouter);

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Server running in port ${port}`));
