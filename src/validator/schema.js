const Joi = require('joi');

const ThreadPayloadSchema = Joi.object({
  title: Joi.string().max(150).required(),
  body: Joi.string().required(),
});

const CommentPayloadSchema = Joi.object({
  content: Joi.string().required(),
});

module.exports = {
  ThreadPayloadSchema,
  CommentPayloadSchema,
};