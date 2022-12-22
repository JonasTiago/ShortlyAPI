import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config()

const generateToken = (id) =>
  jwt.sign({ id: id }, process.env.SECRET_JWT, { expiresIn: 86400 });

export { generateToken };
