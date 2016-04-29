var request = require('superagent');

var getStuff = function(path, doSomething){
  request
  .get('http://www.stuff.co.nz')
  .end(function(err, res) {
    console.log(getStuff);
  });
};

module.exports = getStuff;