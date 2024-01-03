const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db/index");

// User Routes
router.post("/signup", async (req, res) => {
  // Implement user signup logic
  const username = req.headers.username;
  const password = req.headers.password;

  try {
    const newUser = new User({ username, password });
    await newUser.save();
    res.json({
      message: "User created successfully",
    });
  } catch (err) {
    res.send(err);
  }
});

router.get("/courses", async (req, res) => {
  try {
    const allCourses = await Course.find({});
    res.json({ courses: allCourses });
  } catch (err) {
    res.send(err);
  }
});

router.post("/courses/:courseId", userMiddleware, async (req, res) => {
  const courseId = req.params.courseId;
  const username = req.headers.username;

  /*
  const foundUser = await User.findOne({ username, password });
  foundUser.courses.push(courseId);
  await foundUser.save();
  */
  //  another way
  await User.updateOne(
    {
      username,
    },
    {
      $push: {
        courses: courseId,
      },
    }
  );

  res.send("Successfully purchased the course");
});

router.get("/purchasedCourses", userMiddleware, async (req, res) => {
  const username = req.headers.username;

  /*
  const purchasedCourses = [];
  const foundUser = await User.findOne({ username, password });
    for (let course of foundUser.courses) {
      purchasedCourses.push(await Course.findById(course));
    }
    res.json({ purchasedCourses });
  */
  //  another way of doing the same thing
  const user = await User.findOne({ username });
  const courses = await Course.find({
    _id: {
      $in: user.courses,
    },
  });

  res.json({ courses });
});

module.exports = router;
