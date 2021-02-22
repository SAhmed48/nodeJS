function AsyncMiddleware(handler) {
  return async (req, res, next) => {
    try {
      await handler(req, res);
    } catch (execption) {
      next(execption);
    }
  };
}

module.exports = AsyncMiddleware;
