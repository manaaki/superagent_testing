var request = require('superagent');

var getStuff = function(path, callback) {
  request('http://www.stuff.co.nz', function(err, res) {
    callback(null, res.text);
  });
};

module.exports = getStuff;