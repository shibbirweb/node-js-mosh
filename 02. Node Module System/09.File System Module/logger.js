console.log(__filename);
console.log(__dirname);

var url = "http://mylogger.io/log";

function log(message) {
  // Send an HTTP request
  console.log(message);
}

module.exports = log;

/*
// module wrapper function
(function (exports, require, module, __filename, __dirname) {
  // all code runs here
});

*/
