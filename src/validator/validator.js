const InvariantError = require('../Commons/exceptions/InvariantError');
const { ThreadPayloadSchema, CommentPayloadSchema } = require('./schema');

const Validator = {
  validateThreadPayload: (payload) => {
    const validationResult = ThreadPayloadSchema.validate(payload);
    if (validationResult.error) {
      throw new InvariantError(validationResult.error.message);
    }
  },
  validateCommentPayload: (payload) => {
    const validationResult = CommentPayloadSchema.validate(payload);
    if (validationResult.error) {
      throw new InvariantError(validationResult.error.message);
    }
  },
};

module.exports = Validator;