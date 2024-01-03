// Middleware for handling auth
const jwt = require("jsonwebtoken");
const secret = "badSecret";

async function adminMiddleware(req, res, next) {
  let token = req.headers.authorization;
  token = token.slice(7);

  try {
    const decoded = jwt.verify(token, secret);
    console.log(decoded);
    if (decoded) return next();
    return res.send("Invalid user");
  } catch (err) {
    return res.send("Invalid token");
  }
}

module.exports = adminMiddleware;
