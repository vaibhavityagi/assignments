const { User } = require("../db/index");

async function userMiddleware(req, res, next) {
  // Implement user auth logic
  // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
  const username = req.headers.username;
  const password = req.headers.password;
  try {
    const foundUser = await User.findOne({ username, password });
    if (foundUser) return next();
    return res.status(401).send("You cannot access this");
  } catch (err) {
    res.send(err);
  }
}

module.exports = userMiddleware;
