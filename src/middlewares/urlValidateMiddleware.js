import urlSchema from "../models/urlSchema.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { connection } from "../database/db.js";

dotenv.config();

export default async function urlValidate(req, res, next) {
  const url = req.body.url;
  const authorization = req.headers.authorization;
  const token = authorization?.replace("Bearer ", "");

  if (!token) {
    return res.sendStatus(401);
  }

  const { error } = urlSchema.validate({ url });

  if (error) return res.status(422).send(error.details[0].message);

  try {
    jwt.verify(token, process.env.SECRET_JWT, async (error, decoded) => {
      if (error) return res.status(401).send({ message: "Token invalid!" });

      const userValid = await connection.query(
        `SELECT * FROM users WHERE id = $1;`,
        [decoded.id]
      );

      if (!userValid.rowCount) return res.sendStatus(401);

      res.locals.url = url;
      res.locals.userId = decoded.id;

      next();
    });
  } catch (erro) {
    console.log(erro);
    res.sendStatus(500);
  }
}
