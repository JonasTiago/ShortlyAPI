import { connection } from "../database/db.js";
import signinSchema from "../models/signinSchema.js";

export default async function signinValidate(req, res, next) {
  const {  email, password } = req.body;

  const user = {
    email,
    password
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

    if(!userValid.rowCount) return res.sendStatus(401);

    if(!(userValid.rows[0].password === password)) return res.sendStatus(401);
    
    res.locals.user = user;
  } catch (erro) {
    console.log(erro);
    res.sendStatus(500);
  }

  next();
}
