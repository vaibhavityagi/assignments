// Middleware for handling auth

const { Admin } = require("../db/index");

async function adminMiddleware(req, res, next) {
  // Implement admin auth logic
  // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
  const username = req.headers.username;
  const password = req.headers.password;
  try {
    const found = await Admin.findOne({ username, password });
    if (found) return next();
    res.status(401).send("You cannot access this");
  } catch (err) {
    res.send(err);
  }
}

module.exports = adminMiddleware;
