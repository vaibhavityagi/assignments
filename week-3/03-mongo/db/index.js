const mongoose = require("mongoose");

// Connect to MongoDB
mongoose
  .connect(
    "mongodb+srv://vaibhavi:md95U5gKnp3FNvdl@cluster0.0r7fzlf.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("successfull connection");
  })
  .catch((err) => {
    console.log(err);
  });

// Define schemas
const AdminSchema = new mongoose.Schema({
  username: String,
  password: String,
});

const CourseSchema = new mongoose.Schema({
  title: String,
  description: String,
  price: Number,
  imageLink: String,
});

const Course = mongoose.model("Course", CourseSchema);

const UserSchema = new mongoose.Schema({
  username: String,
  password: String,
  courses: [{ type: mongoose.Schema.Types.ObjectId, ref: "Course" }],
});

const Admin = mongoose.model("Admin", AdminSchema);
const User = mongoose.model("User", UserSchema);

module.exports = {
  Admin,
  User,
  Course,
};
