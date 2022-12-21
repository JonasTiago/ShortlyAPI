import userSchema from "../models/userSchema";

export default function signupValidate(req, res, next) {
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
    res.status(422).send(errors);
  }

  try {
    res.locals.newUser = newUser;
    // const userValid =
  } catch (erro) {
    console.log(erro);
    res.sendStatus(500);
  }
}
