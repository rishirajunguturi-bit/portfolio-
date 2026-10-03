export const errorHandler = (err, req, res, next) => {
  console.error(`[Server Error] ${err.message}`);

  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;

  res.status(statusCode).json({
    success: false,
    message: err.message || 'Server Error. Unable to process your request.',
    stack: process.env.NODE_ENV === 'production' ? null : err.stack
  });
};
