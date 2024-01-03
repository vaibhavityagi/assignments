const jwt = require("jsonwebtoken");

const { JWT_SECRET } = require("../config");

async function userMiddleware(req, res, next) {
  let token = req.headers.authorization;
  const words = token.split(" ");
  token = words[1];

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    if (decoded.username) {
      req.username = decoded.username;
      return next();
    }
    return res.send("Invalid user");
  } catch (err) {
    return res.send("Invalid token");
  }
}

module.exports = userMiddleware;
