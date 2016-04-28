var request = require("superagent")

var getStuff = function(path, doSomething){
  request
    .get(path)
    .end(function(err, res){
      // console.log("error: ", err)
      // console.log("response: ", res)
      if(err) { 
        doSomething(err)
      } else { 

        doSomething(null, res)
      }

    })
}

module.exports = getStuff
