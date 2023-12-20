const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();

// Admin Routes
router.post("/signup", (req, res) => {
  const username = req.headers.username;
  const password = req.headers.password;

  res.json({
    message: "Admin created successfully",
  });
});

router.post("/courses", adminMiddleware, (req, res) => {
  const username = req.headers.username;
  const password = req.headers.password;

  const title = req.body.title;
  const description = req.body.description;
  const price = req.body.price;
  const imageLink = req.body.imageLink;

  res.json({
    message: "Course created",
    courseId: "New course id",
  });
});

router.get("/courses", adminMiddleware, (req, res) => {});

module.exports = router;
