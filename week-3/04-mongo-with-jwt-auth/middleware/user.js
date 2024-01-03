const { User } = require("../db/index");
const jwt = require("jsonwebtoken");
const secret = "badSecret";

async function userMiddleware(req, res, next) {
  next();
}

module.exports = userMiddleware;
