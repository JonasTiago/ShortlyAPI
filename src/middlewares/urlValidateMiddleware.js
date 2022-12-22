import urlSchema from "../models/urlSchema.js";

export default async function urlValidate(req, res, next) {
  const url = req.body;
  const authorization = req.headers.authorization;
  const token = authorization?.replace("Bearer ", "");

  if (!token) {
    return res.sendStatus(401);
  }

  const { error } = urlSchema.validate(url)

  if(error ) return res.status(422).send(error.details[0].message)

  try {
  } catch (erro) {
    console.log(erro);
    res.sendStatus(500);
  }

  next();
}
