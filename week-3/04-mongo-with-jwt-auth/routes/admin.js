const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db/index");
const jwt = require("jsonwebtoken");
const router = Router();

const { JWT_SECRET } = require("../config");

// Admin Routes
router.post("/signup", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  try {
    const newAdmin = new Admin({ username, password });
    await newAdmin.save();

    res.status(200).json({
      message: "Admin created successfully",
    });
  } catch (err) {
    res.send(err);
  }
});

router.post("/signin", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  const admin = await Admin.findOne({ username, password });
  if (!admin) {
    return res.json({ message: "User doesn't exist" });
  }

  let token = jwt.sign({ username }, JWT_SECRET);
  return res.status(200).json({ token });
});

router.post("/courses", adminMiddleware, async (req, res) => {
  const title = req.body.title;
  const description = req.body.description;
  const price = req.body.price;
  const imageLink = req.body.imageLink;

  const newCourse = new Course({ title, description, price, imageLink });
  try {
    await newCourse.save();
    res.status(200).json({
      message: "Course created",
      courseId: newCourse._id,
    });
  } catch (err) {
    res.send(err);
  }
});

router.get("/courses", adminMiddleware, async (req, res) => {
  const courses = await Course.find({});
  res.send(courses);
});

module.exports = router;
