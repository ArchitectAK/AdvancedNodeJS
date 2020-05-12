var fs = require("fs");
var { promisify } = require("util");

var writeFile = promisify(fs.writeFile);

writeFile("sample.txt", "This is a sample")
  .then(() => console.log("Successfully created"))
  .catch((error) => console.log(`error in creating file `));
