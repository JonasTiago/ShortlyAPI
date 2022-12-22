import { nanoid } from "nanoid";
import { connection } from "../database/db.js";

export async function createUrlShort(req, res) {
  const userId = res.locals.userId;
  const url = res.locals.url;

  try {
    const shortly = nanoid(5);

    const u = await connection.query(
      `INSERT INTO urls (url, "userId", shortly, visualizations) VALUES ($1, $2, $3, $4);`,
      [url, userId, shortly, 0]
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

export async function shortUrl(req, res) {
  const url = res.locals.url;

  try {
    await connection.query(
      `UPDATE urls SET visualizations = $1 WHERE urls.id = $2;`,
      [url.visualizations + 1, url.id]
    );

    res.status(200).redirect(url.url);
  } catch (errr) {
    res.status(500).send(errr.message);
  }
}

export async function deleteUrl(req, res) {
  const urlId = res.locals.shortUrlId;

  try {
    connection.query(`DELETE FROM urls WHERE id = $1`, [urlId]);
    res.sendStatus(204);
  } catch (errr) {
    res.status(500).send(errr.message);
  }
}
