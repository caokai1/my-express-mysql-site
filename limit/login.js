const joi = require("joi");

const account = joi.string().alphanum().min(6).max(12).required();

// @ts-ignore
const password = joi
  .string()
  .pattern(/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{2,64}$/)
  .min(6)
  .max(12)
  .required();

exports.login_limit = {
  body: {
    account,
    password
  }
};
