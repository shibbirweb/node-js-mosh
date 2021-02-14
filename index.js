const debug = require('debug')('app:startup');
const express = require("express");
const morgan = require('morgan');
const app = express();


if(app.get('env') === 'development'){

  app.use(morgan('tiny'));
  debug('Morgan enabled...'); // console.log()

}


//PORT
const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Listening on port ${port}...`));
