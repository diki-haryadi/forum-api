const routes = (handler) => ([
  {
    method: 'POST',
    path: '/authentications',
    handler: handler.postAuthenticationHandler,
    options: {
      auth: {
        mode: 'try',
      },
    },
  },
  {
    method: 'PUT',
    path: '/authentications',
    handler: handler.putAuthenticationHandler,
    options: {
      auth: {
        mode: 'try',
      },
    },
  },
  {
    method: 'DELETE',
    path: '/authentications',
    handler: handler.deleteAuthenticationHandler,
    options: {
      auth: {
        mode: 'try',
      },
    },
  },
]);

module.exports = routes;
