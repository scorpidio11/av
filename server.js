
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
let path = require("path");

app.use(express.urlencoded({extended: true}));
app.use(express.json());

let characters = [
    
    {routeName: "captainamerica", // routing no space
    name: "Captain America",
    role: "Saving the world",
    age: 100,
    strength: 1000
},{
    routeName: "babo",
    name: "Babo",
    role: "Study",
    age: 50,
    strength: 500
},{
    routeName: "mimi",
    name: "Mimi",
    role: "Cook",
    age: 90,
    strength: 2000
}];
// When someone visit main of my website do this '/' is root of webstie
// defining route, CALL ROUTE
// function takes two parameter request / response


// app.get('/', function(req, res){
//     res.send('Welcome to Avengers page!');
//   });

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page

  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "view.html"));
  });
  
  app.get("/add", function(req, res) {
    res.sendFile(path.join(__dirname, "add.html"));
  });
  


// SEE API REST standard /api/v1/characters/ 
//:characterID (it became array)
app.get("/api/v1/characters", function (req, res) {
   //return res.json(characters);
   return res.json(characters);
});

// request ID need to match with the 

app.get("/api/v1/characters/:characterId", function (req, res){
	
	let characterId = req.params.characterId;
	
	console.log(characterId);
	
	for (let i = 0; i < characters.length; i++) {
		if (characterId === characters[i].routeName){
			return res.json(characters[i]);
		}
	}	
	
}); //do an HTTP GET


app.post("/api/v1/characters", function (req, res) {
    let newCharacter = req.body;
    console.log(newCharacter);
 });



 app.listen(PORT, function(){

    console.log("Avengers on PORT " + PORT);
});



