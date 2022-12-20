import joi from "joi";

const userSchema = joi.object({
  name: joi.string().required().min(3),
  email: joi.string().required(),
  password: joi.string().required().min(8),
  confirmPassword: joi.string().required(),
});

export default userSchema;
