const InvariantError = require('../Commons/exceptions/InvariantError');
const { ThreadPayloadSchema, CommentPayloadSchema, UserPayloadSchema, LoginPayloadSchema, RefreshTokenPayloadSchema } = require('./schema');

const Validator = {
  validateThreadPayload: (payload) => {
    const validationResult = ThreadPayloadSchema.validate(payload);
    if (validationResult.error) {
      if (validationResult.error.details[0].type === 'any.required') {
        throw new InvariantError('tidak dapat membuat thread baru karena properti yang dibutuhkan tidak ada');
      }
      throw new InvariantError('tidak dapat membuat thread baru karena tipe data tidak sesuai');
    }
  },
  validateCommentPayload: (payload) => {
    const validationResult = CommentPayloadSchema.validate(payload);
    if (validationResult.error) {
      throw new InvariantError(validationResult.error.message);
    }
  },
  validateUserPayload: (payload) => {
    const validationResult = UserPayloadSchema.validate(payload);
    if (validationResult.error) {
      throw new InvariantError(validationResult.error.message);
    }
  },
  validateLoginPayload: (payload) => {
    const validationResult = LoginPayloadSchema.validate(payload);
    if (validationResult.error) {
      throw new InvariantError(validationResult.error.message);
    }
  },
  validateRefreshTokenPayload: (payload) => {
    const validationResult = RefreshTokenPayloadSchema.validate(payload);
    if (validationResult.error) {
      throw new InvariantError(validationResult.error.message);
    }
  },
};

module.exports = Validator;