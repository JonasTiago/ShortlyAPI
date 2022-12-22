import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { connection } from "../database/db.js";

dotenv.config();

export default async function shortUrlValide(req, res, next) {
  const authorization = req.headers.authorization;
  const token = authorization?.replace("Bearer ", "");

  if (!token) {
    return res.sendStatus(401);
  }

  try {
    jwt.verify(token, process.env.SECRET_JWT, async (error, decoded) => {
      if (error) return res.status(401).send({ message: "Token invalid!" });

      const userValid = await connection.query(
        `SELECT * FROM users WHERE id = $1;`,
        [decoded.id]
      );

      if (!userValid.rowCount) return res.sendStatus(404);

      res.locals.user = userValid.rows[0];

      next();
    });
  } catch (erro) {
    console.log(erro);
    res.sendStatus(500);
  }
}
