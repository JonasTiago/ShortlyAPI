import { connection } from "../database/db.js";
import userSchema from "../models/userSchema.js";

export default async function signupValidate(req, res, next) {
  const { name, email, password, confirmPassword } = req.body;

  const newUser = {
    name,
    email,
    password,
    confirmPassword,
  };

  const { error } = userSchema.validate(newUser, { abortEarly: false });

  if (error) {
    const errors = error.details.map((detail) => detail.message);
    return res.status(422).send(errors);
  }

  try {
    const userValid = await connection.query(
      `SELECT * FROM users WHERE email = $1`,
      [email]
    );

    if(userValid.rowCount) return res.sendStatus(409)

    res.locals.newUser = newUser;
  } catch (erro) {
    console.log(erro);
    res.sendStatus(500);
  }

  next();
}
