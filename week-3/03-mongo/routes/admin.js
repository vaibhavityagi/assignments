const { Router } = require("express");
const { Admin, Course } = require("../db/index");
const adminMiddleware = require("../middleware/admin");
const router = Router();

// Admin Routes
router.post("/signup", async (req, res) => {
  const username = req.headers.username;
  const password = req.headers.password;

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
