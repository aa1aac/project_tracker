module.exports = (req, res, next) => {
  if (!req.user) {
    return res.status(401).json({
      errors: ["please log in to carry out this operation"],
      status: false,
    });
  }
  next();
};
