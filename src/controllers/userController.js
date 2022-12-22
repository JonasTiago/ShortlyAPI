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
