import { nanoid } from "nanoid";
import { connection } from "../database/db.js";

export async function createUrlShort(req, res) {
  const userId = res.locals.userId;
  const url = res.locals.url;

  try {
    const shortly = nanoid(5);

    await connection.query(
      `INSERT INTO urls (url, "userId", shortly) VALUES ($1, $2, $3);`,
      [url, userId, shortly]
    );

    res.status(201).send({shortly});
  } catch (errr) {
    res.status(500).send(errr.message);
  }
}
