var fs = require("fs");
var path = "c:\\Temp\\Test.txt";
var data = "write file";

fs.writeFile(path, data, function(error) {
     if (error) {
       console.error("error:  " + error.message);
     } else {
       console.log("Successful write to " + path);
     }
});

module.exports = printFile;