const errorHandler = (error, req, res, next) => {
  if (error.name === "CastError") {
    return res.status(400).send({ error: "Malformated id" })
  } else if (error.name === "ValidationError") {
    return res.status(400).json({ error: error.message });
  } else if (error.name === "SequelizeUniqueConstraintError") {
    return res.status(400).json({
      error: error.errors[0].message
    })
  } else if (error.name === "JsonWebTokenError") {
    return res.status(401).json({ error: error.message })
  } else if (error.name === "TokenExpirederror") {
    return res.status(401).json({
      error: 'token expired'
    })
  }

  next(error);
}

export { errorHandler }
