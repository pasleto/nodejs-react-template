const notFound = (req, res, next) => {
  const error = new Error('Endpoint not found');
  res.status(404);
  next(error);
};

// eslint-disable-next-line no-unused-vars
const errorHandler = (error, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode);
  process.env.NODE_ENV === 'development' ? res.send({
    message: error.message,
    endpoint: req.originalUrl,
    status: statusCode,
    stack: error.stack
  }) : res.send({
    message: error.message,
    endpoint: req.originalUrl,
    status: statusCode
  });
};

module.exports = {
  notFound,
  errorHandler
};
