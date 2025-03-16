class ThreadsHandler {
  constructor({
    addThreadUseCase,
    addCommentUseCase,
    deleteCommentUseCase,
    getThreadDetailUseCase,
  }) {
    this._addThreadUseCase = addThreadUseCase;
    this._addCommentUseCase = addCommentUseCase;
    this._deleteCommentUseCase = deleteCommentUseCase;
    this._getThreadDetailUseCase = getThreadDetailUseCase;
  }

  async postThreadHandler(request, h) {
    const { id: userId } = request.auth.credentials;
    const addedThread = await this._addThreadUseCase.execute(request.payload, userId);

    const response = h.response({
      status: 'success',
      data: {
        addedThread,
      },
    });
    response.code(201);
    return response;
  }

  async postCommentHandler(request, h) {
    const { id: userId } = request.auth.credentials;
    const { threadId } = request.params;
    const addedComment = await this._addCommentUseCase.execute(request.payload, threadId, userId);

    const response = h.response({
      status: 'success',
      data: {
        addedComment,
      },
    });
    response.code(201);
    return response;
  }

  async deleteCommentHandler(request) {
    const { id: userId } = request.auth.credentials;
    const { threadId, commentId } = request.params;

    await this._deleteCommentUseCase.execute(threadId, commentId, userId);

    return {
      status: 'success',
    };
  }

  async getThreadDetailHandler(request) {
    const { threadId } = request.params;
    const thread = await this._getThreadDetailUseCase.execute(threadId);

    return {
      status: 'success',
      data: {
        thread,
      },
    };
  }
}

module.exports = ThreadsHandler;