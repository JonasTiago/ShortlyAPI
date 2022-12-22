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

    res.status(201).send({ shortly });
  } catch (errr) {
    res.status(500).send(errr.message);
  }
}

export async function findUrlId(req, res) {
  const urlId = req.params.id;

  try {
    const url = await connection.query(
      `SELECT u.id,u.shortly , u.url FROM urls u  WHERE id = $1;`,
      [parseInt(urlId)]
    );

    if (!url.rowCount) return res.sendStatus(404);

    res.status(200).send(url.rows[0]);
  } catch (errr) {
    res.status(500).send(errr.message);
  }
}
