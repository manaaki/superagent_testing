var getStuff = require('./getStuff.js');
var fs = require('fs');
var path = '/Users/redhendery/Documents/workspace/TAtraining/superagent_testing/dump.txt';
var data = data;

var printFile = fs.writeFile(path, data, function(error) {
    if (error) {
      console.error('Write error:  ' + error.message);
    } else {
      console.log('Successful Write to ' + path);
    }
});

module.exports = printFile;