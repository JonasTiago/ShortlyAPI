import { connection } from "../database/db.js";
import signinSchema from "../models/signinSchema.js";
import bcrypt from "bcrypt";

export default async function signinValidate(req, res, next) {
  const { email, password } = req.body;

  const user = {
    email,
    password,
  };

  const { error } = signinSchema.validate(user, { abortEarly: false });

  if (error) {
    const errors = error.details.map((detail) => detail.message);
    return res.status(422).send(errors);
  }

  try {
    const userValid = await connection.query(
      `SELECT * FROM users WHERE email = $1`,
      [email]
    );

    if (!userValid.rowCount) return res.sendStatus(401);

    const passwordValid = bcrypt.compareSync(password, userValid.rows[0].password);

    if (!passwordValid) return res.sendStatus(401);

    res.locals.user = userValid.rows[0];
    next();
  } catch (err) {
    console.log(err);
    res.status(500).send(err.message);
  }
}
