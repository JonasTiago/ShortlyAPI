import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { connection } from "../database/db.js";

dotenv.config();

export default async function shortUrlValide(req, res, next) {
  const shortUrlId = req.params.id;
  const authorization = req.headers.authorization;
  const token = authorization?.replace("Bearer ", "");

  if (!token) {
    return res.sendStatus(401);
  }

  try {

    const shortlyValid = await connection.query(`SELECT * FROM urls WHERE id = $1`, [
      parseInt(shortUrlId)
    ]);

    
    if(!shortlyValid.rowCount) return res.sendStatus(404);
    
    jwt.verify(token, process.env.SECRET_JWT, async (error, decoded) => {
      if (error) return res.status(401).send({ message: "Token invalid!" });
      
      const userValid = await connection.query(
        `SELECT * FROM users WHERE id = $1;`,
        [decoded.id]
        );

        
        if (!userValid.rowCount) return res.sendStatus(401);
        
        console.log(userValid.rows[0].id)

        if (shortlyValid.rows[0].userId !== userValid.rows[0].id)
        return res.sendStatus(401);

      res.locals.shortUrlId = shortlyValid.rows[0].id;

      next();
    });
  } catch (erro) {
    console.log(erro);
    res.sendStatus(500);
  }
}
