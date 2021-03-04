const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/playground")
  .then(() => console.log("Connected to MongoDB..."))
  .catch((error) => console.log("Could not connect to MongoDB...", error));

const courseSchema = new mongoose.Schema({
  name: String,
  author: String,
  tags: [String],
  date: { type: Date, default: Date.now },
  isPublished: Boolean,
});

// Class, objects
// Course, nodeCourse

const Course = mongoose.model("Course", courseSchema);

async function createCourse() {
  const course = new Course({
    name: "Angular Course",
    author: "Mosh",
    tags: ["angular", "frontend"],
    isPublished: true,
  });

  const result = await course.save();
  console.log(result);
}

async function getCourses() {
  // Comparison operator
  // eq (equal)
  // ne (not equal)
  // ge (greater than)
  // gte (greater than or equal to)
  // lt (less than)
  // lte (less than or equal to)
  // in
  // nin (not in)

  // Logical Operator
  // or
  // and

  // Paginations
  const pageNumber = 2;
  const pageSize = 10

  const courses = await Course
    // .find({ author: 'Mosh', isPublished: true })
    // .find({ price: { $gte: 10, $lte: 20 } })
    // .find({ price: { $in: [10, 15, 20]} })
    // .find()
    // .or([{ author: "Mosh" }, { isPublished: true }])
    // .and()

    // starts with Mosh
    // .find({ author: /^Mosh/ })

    // Ends with Hamedani
    // .find({ author: /Hamdedani$/i })

    // Contains Mosh
    // .find({ author: /.*Mosh.*/i })
    .find({ author: 'Mosh', isPublished: true })
    .skip((pageNumber - 1) * pageSize)
    .limit(pageSize)
    .limit(10)
    .sort({ name: 1 })
    
    // retrieve only specific column
    //.select({ name: 1, tags: 1 });

    // get the number of documents
    .count();

  console.log(courses);
}

getCourses();
