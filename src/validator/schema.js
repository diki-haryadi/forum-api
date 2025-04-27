const Joi = require('joi');

const ThreadPayloadSchema = Joi.object({
  title: Joi.string().max(150).required(),
  body: Joi.string().required(),
});

const CommentPayloadSchema = Joi.object({
  content: Joi.string().required(),
});

const UserPayloadSchema = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().required(),
  fullname: Joi.string().required(),
});

const LoginPayloadSchema = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().required(),
});

const RefreshTokenPayloadSchema = Joi.object({
  refreshToken: Joi.string().required(),
});

module.exports = {
  ThreadPayloadSchema,
  CommentPayloadSchema,
  UserPayloadSchema,
  LoginPayloadSchema,
  RefreshTokenPayloadSchema,
};