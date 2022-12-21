import { connection } from "../database/db.js";

export async function signup(req, res) {
  const { name, email, password, confirmPassword } = res.locals.newUser;

  try {
    await connection.query(
      `INSERT INTO users (name,email,password,"confirmPassword") 
        VALUES ($1, $2, $3, $4);`,
      [name, email, password, confirmPassword]
    );
    res.sendStatus(201);
  } catch (errr) {
    res.status(500).send(errr.message);
  }

}

export async function signin(req, res) {
  const {  email, password } = res.locals.user;

  try {
    res.sendStatus(200);
  } catch (errr) {

    res.status(500).send(errr.message);
  }

}
