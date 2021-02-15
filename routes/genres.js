const express = require("express");
const { genreValidation } = require("../rules/validation");
const router = express.Router();

const genres = [
  {
    id: 1,
    name: "Science Fiction",
  },
  {
    id: 2,
    name: "Biography",
  },
];

// get all genres
router.get("/", (req, res) => {
  res.send(genres);
});

// get single genre
router.get("/:id", (req, res) => {
  const genre = genres.find((g) => g.id === parseInt(req.params.id));

  if (!genre)
    return res
      .status(404)
      .send(`Genre was not found by given id ${req.params.id}`);

  res.send(genre);
});

// create a new genre
router.post("/", (req, res) => {
  // validate user input

  const { error } = genreValidation(req.body);

  if (error) return res.status(400).send(error.details[0].message);

  const genre = {
    id: genres.length + 1,
    name: req.body.name,
  };

  genres.push(genre);

  res.send(genre);
});

// update genre
router.put("/:id", (req, res) => {
  // check genre exists or not
  const genre = genres.find((g) => g.id === parseInt(req.params.id));

  if (!genre)
    return res
      .status(404)
      .send(`Genre was not found by given ID ${req.params.id}`);

  // validate use input
  const { error } = genreValidation(req.body);

  if (error) return res.status(400).send(error.details[0].message);

  // update name
  genre.name = req.body.name;

  res.send(genre);
});

// delete a genre
router.delete("/:id", (req, res) => {
  // check genre exists or not
  const genre = genres.find((g) => g.id === parseInt(req.params.id));

  if (!genre)
    return res
      .status(400)
      .send(`Genre was not found by given ID ${req.params.id}`);

  // get genre index
  const index = genres.indexOf(genre);

  genres.splice(index, 1);

  res.send(genre);
});

module.exports = router;
