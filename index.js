const express = require("express");

const genres = require('./routes/genres')

const app = express();
// json parser
app.use(express.json());

// genre routes
app.use('/api/genres', genres);


const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));
