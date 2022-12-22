import { connection } from "../database/db.js";
import bcrypt from "bcrypt";
import { generateToken } from "../services/authService.js";

export async function signup(req, res) {
  const { name, email, password } = res.locals.newUser;

  const encryptedPassword = bcrypt.hashSync(password, 10);

  try {
    await connection.query(
      `INSERT INTO users (name,email,password) 
        VALUES ($1, $2, $3);`,
      [name, email, encryptedPassword]
    );
    res.sendStatus(201);
  } catch (errr) {
    res.status(500).send(errr.message);
  }
}

export async function signin(req, res) {
  const user = res.locals.user;

  try {
    const token = generateToken(user.id);

    res.status(200).send({ token });
  } catch (errr) {
    res.status(500).send(errr.message);
  }
}

export async function myShortlys(req, res) {
  const user = res.locals.user;

  try {
    const myShorts = await connection.query(
      `SELECT u.id, u.name, 
    SUM (l.visualizations) AS "visitCount", 
    json_agg(json_build_object('id', l.id, 'shortUrl', l.shortly, 'url', l.url, 'visitCount', l.visualizations)) AS "shortenedUrls"
    FROM users u JOIN urls l ON u.id = l."userId" WHERE u.id = $1 GROUP BY u.id;
    `,
      [user.id]
    );

    res.send(myShorts.rows[0]);
  } catch (errr) {
    res.status(500).send(errr.message);
  }
}

export async function rankingVisualization(req, res) {
  try {
    const ranking = await connection.query(`SELECT u.id, u.name, 
    COUNT (l.shortly) AS "linksCount",
    SUM (COALESCE (l.visualizations, 0)) AS "visitCount"
    FROM users u LEFT JOIN urls l ON u.id = l."userId" GROUP BY u.id ORDER BY "visitCount" DESC, "linksCount" DESC LIMIT 10;`);

    res.status(200).send(ranking.rows)
  } catch (errr) {
    res.status(500).send(errr.message);
  }
}
