var getStuff = require('./getStuff.js');
var fs = require('fs');
var path = '/Users/redhendery/Documents/workspace/TAtraining/superagent_testing/dump.txt';
var data = data;

getStuff('http://www.stuff.co.nz', function (err, html) {

  fs.writeFile(path, data, function(error) {
    if (error) {
      console.error('Somethings fucked:  ' + error.message);
    } else {
      console.log('Wrote file to: ' + path);
    }
  });
});