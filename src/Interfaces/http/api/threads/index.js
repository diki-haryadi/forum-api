const ThreadsHandler = require('./handler');
const routes = require('./routes');

module.exports = {
  name: 'threads',
  register: async (server, { container }) => {
    const threadsHandler = new ThreadsHandler({
      addThreadUseCase: container.getInstance(require('../../../../Applications/use_case/AddThreadUseCase').name),
      addCommentUseCase: container.getInstance(require('../../../../Applications/use_case/AddCommentUseCase').name),
      deleteCommentUseCase: container.getInstance(require('../../../../Applications/use_case/DeleteCommentUseCase').name),
      getThreadDetailUseCase: container.getInstance(require('../../../../Applications/use_case/GetThreadDetailUseCase').name),
    });
    server.route(routes(threadsHandler));
  },
};