const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");
const jwt = require("jsonwebtoken");
const secret = "badSecret";

// User Routes
router.post("/signup", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  try {
    const newAdmin = await User.create({
      username,
      password,
    });

    console.log(newAdmin);

    res.status(200).json({
      message: "User created successfully",
    });
  } catch (err) {
    res.send(err);
  }
});

router.post("/signin", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  const user = await User.findOne({ username, password });
  if (!user) return res.json({ messgase: "User doesn't exist" });
  const token = jwt.sign({ username }, secret);
  res.json({ token });
});

router.get("/courses", async (req, res) => {
  const courses = await Course.find({});
  res.send(courses);
});

router.post("/courses/:courseId", userMiddleware, async (req, res) => {
  const courseId = req.params.courseId;
  const course = await Course.findById(courseId);
  const user = await User.findById();
});

router.get("/purchasedCourses", userMiddleware, async (req, res) => {
  const user = await User.findById();
  res.send(user.courses);
});

module.exports = router;
