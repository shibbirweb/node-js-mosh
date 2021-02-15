const debug = require("debug")("app:startup");
const config = require("config");
const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const Joi = require("joi");
const logger = require("./middleware/logger");
const courses = require('./routes/courses');
const home = require('./routes/home')
const app = express();

app.set("view engine", "pug");
app.set("views", "./views"); // default

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(helmet());

app.use('/api/courses', courses);
app.use('/', home);

// Configuration
console.log("Application Name: " + config.get("name"));
console.log("Mail Server: " + config.get("mail.host"));
console.log("Mail password: " + config.get("mail.password"));

if (app.get("env") === "development") {
  console.log(`NODE_ENV: ${app.get("env")}`);

  app.use(morgan("tiny"));
  console.log("Morgan enabled...");
}

app.use(logger);

app.use(function (req, res, next) {
  console.log("Authenticating...");
  next();
});




//PORT
const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Listening on port ${port}...`));
