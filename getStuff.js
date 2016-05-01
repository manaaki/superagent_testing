var request = require('superagent');

function getStuff(path, doSomething){
  request
    .get(path)
    .end(function(err, res) {
      console.log(res);
        if(err) {
          doSomething(err);
        } else
          doSomething(null, res);
      }
  );
}

module.exports = getStuff;