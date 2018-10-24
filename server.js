
// var express = require('express');
// var app = express();

// app.get('/', function(req, res){
//   res.send('hello world');
// });

// app.listen(3000);


let express = require('express');
let app = express();
// any # 80 and above
const PORT = 3000;

// When someone visit main of my website do this '/' is root of webstie
// defining route, CALL ROUTE
// function takes two parameter request / response


app.get('/', function(req, res){
    res.send('Welcome to Avengers page!');
  });

app.listen(PORT, function(){

    console.log("Avengers on PORT " + PORT);
});


