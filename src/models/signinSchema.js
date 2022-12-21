import joi from "joi";

const signinSchema = joi.object({
  email: joi.string().required(),
  password: joi.string().required().min(8),
});

export default signinSchema;
