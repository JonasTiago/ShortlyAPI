import { connection } from "../database/db.js";

export default async function shortUrlMiddleware(req, res, next) {
  const shortly = req.params.shortUrl;

  try {
    const url = await connection.query(
      `SELECT * FROM urls WHERE shortly = $1;`,
      [shortly]
    );

    if (!url.rowCount) return res.sendStatus(404);

    res.locals.url = url.rows[0];

    next()
  } catch (errr) {
    res.stutus(500).send(errr.message);
  }
}
