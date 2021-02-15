const express = require("express");
const router = express.Router();

const courses = [
  { id: 1, name: "course 1" },
  { id: 2, name: "course 2" },
  { id: 3, name: "course 3" },
];

router.get("/", (req, res) => {
  res.send(courses);
});

router.post("/", (req, res) => {
  const { error } = validateCourse(req.body);

  if (error) {
    // 400 Bad request
    res.status(400).send(error.details[0].message);
    return;
  }
  const course = {
    id: courses.length + 1,
    name: req.body.name,
  };

  courses.push(course);

  res.send(course);
});

router.put("/:id", (req, res) => {
  // Look up the course
  // If not exists, return 404
  const course = courses.find((c) => c.id === parseInt(req.params.id));

  if (!course)
    return res.status(404).send("The course with the given ID was not found");

  // validate
  // if invalid, return 400 - Bad request
  const { error } = validateCourse(req.body);

  if (error) return res.status(400).send(error.details[0].message);

  // update course
  // return updated course
  course.name = req.body.name;

  res.send(course);
});

function validateCourse(course) {
  const schema = Joi.object({
    name: Joi.string().min(3).required(),
  });

  return schema.validate(course);
}

router.get("/:id", (req, res) => {
  const course = courses.find((c) => c.id === parseInt(req.params.id));
  if (!course)
    res.status(404).send("The course with the given ID was not found.");
  else res.send(course);
});

module.exports = router;
