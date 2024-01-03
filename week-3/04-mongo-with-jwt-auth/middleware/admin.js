// Middleware for handling auth
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");

async function adminMiddleware(req, res, next) {
  let token = req.headers.authorization;
  const words = token.split(" ");
  token = words[1];

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    if (decoded.username) return next();
    return res.send("Invalid user");
  } catch (err) {
    return res.send("Invalid token");
  }
}

module.exports = adminMiddleware;
