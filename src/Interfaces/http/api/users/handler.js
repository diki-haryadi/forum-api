const AddUserUseCase = require('../../../../Applications/use_case/AddUserUseCase');
const Validator = require('../../../../validator/validator');

class UsersHandler {
  constructor(container) {
    this._container = container;

    this.postUserHandler = this.postUserHandler.bind(this);
  }

  async postUserHandler(request, h) {
    Validator.validateUserPayload(request.payload);
    const addUserUseCase = this._container.getInstance(AddUserUseCase.name);
    const addedUser = await addUserUseCase.execute(request.payload);

    const response = h.response({
      status: 'success',
      data: {
        addedUser: {
          id: addedUser.id,
          username: addedUser.username,
          fullname: addedUser.fullname
        }
      },
    });
    response.code(201);
    return response;
  }
}

module.exports = UsersHandler;
