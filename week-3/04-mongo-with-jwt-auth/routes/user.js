const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");

// User Routes
router.post("/signup", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  try {
    const newAdmin = await User.create({
      username,
      password,
    });

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
  const token = jwt.sign({ username }, JWT_SECRET);
  res.json({ token });
});

router.get("/courses", async (req, res) => {
  const courses = await Course.find({});
  res.send(courses);
});

router.post("/courses/:courseId", userMiddleware, async (req, res) => {
  const username = req.username;
  const courseId = req.params.courseId;

  await User.updateOne(
    { username },
    {
      $push: {
        courses: courseId,
      },
    }
  );
  res.json({ message: "Successfully purchased the course" });
});

router.get("/purchasedCourses", userMiddleware, async (req, res) => {
  const username = req.username;
  const user = await User.findOne({ username });
  const courses = await Course.find({
    _id: {
      $in: user.courses,
    },
  });
  return res.json({ courses });
});

module.exports = router;
