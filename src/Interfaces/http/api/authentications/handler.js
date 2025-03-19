const LoginUserUseCase = require('../../../../Applications/use_case/LoginUserUseCase');
const RefreshAuthenticationUseCase = require('../../../../Applications/use_case/RefreshAuthenticationUseCase');
const LogoutUserUseCase = require('../../../../Applications/use_case/LogoutUserUseCase');
const Validator = require('../../../../validator/validator');

class AuthenticationsHandler {
  constructor(container) {
    this._container = container;

    this.postAuthenticationHandler = this.postAuthenticationHandler.bind(this);
    this.putAuthenticationHandler = this.putAuthenticationHandler.bind(this);
    this.deleteAuthenticationHandler = this.deleteAuthenticationHandler.bind(this);
  }

  async postAuthenticationHandler(request, h) {
    Validator.validateLoginPayload(request.payload);
    const loginUserUseCase = this._container.getInstance(LoginUserUseCase.name);
    const { accessToken, refreshToken } = await loginUserUseCase.execute(request.payload);
    const response = h.response({
      status: 'success',
      data: {
        accessToken,
        refreshToken,
      },
    });
    response.code(201);
    return response;
  }

  async putAuthenticationHandler(request) {
    Validator.validateRefreshTokenPayload(request.payload);
    const refreshAuthenticationUseCase = this._container
      .getInstance(RefreshAuthenticationUseCase.name);
    const accessToken = await refreshAuthenticationUseCase.execute(request.payload);

    return {
      status: 'success',
      data: {
        accessToken,
      },
    };
  }

  async deleteAuthenticationHandler(request) {
    Validator.validateRefreshTokenPayload(request.payload);
    const logoutUserUseCase = this._container.getInstance(LogoutUserUseCase.name);
    await logoutUserUseCase.execute(request.payload);
    return {
      status: 'success',
    };
  }
}

module.exports = AuthenticationsHandler;
