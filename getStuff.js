var request = require('superagent');

var getStuff = function(path, callback) {
  request('http://www.stuff.co.nz', function(err, res) {
    callback(null, res.text);
      if(err) {
        callback(err);
      }
      else {
        callback(null, res);
        }
      }
  );
};

module.exports = getStuff;