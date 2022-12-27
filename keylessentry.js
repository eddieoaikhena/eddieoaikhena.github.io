alert("welcome to javascript!,enjoy the ride.this promises to be fun.")

function checkdriverage() {
	var age=prompt("what is your age?");
	if (Number(age)<18) {
		alert("sorry too young to drive");
	}
	else if (Number(age)===18) {
		alert("congratulations on your first drive")
	}
	else if (Number(age)>18) {
		alert("welcome powering on.")
	}
}

checkdriverage()
var list = ["tiger","dog","cat","monkey"]
console.log(list[0])
var list = [["tiger","dog","cat","monkey"]]
console.log(list[0][1])

var user = {
	name : "eddie",
	age : 34,
	hobby : "reading",
	married : false,
	favouritefood : "amala",
	shout : function() {
		console.log("booo!");
	}
};

var user= {
	username : "eddie",
	password : "babe",
};

var database= [
          {
          	username : "eddie",
          	password : "babe",
          }
];

var newsfeed= [
          {
          	username : "johnny",
          	timeline : "this is so much fun",
          },
          {
          	username : "koyin",
          	timeline : "love is a beautiful feeling",
          }
];

var userNamePrompt = prompt("what is your user name?");
var passwordPrompt = prompt("what is your password?");

function signIn(username, password) {
	if (username == database[0].username &&
		password == database[0].password) {
			console.log(newsfeed);
		} else {
			alert("invalid username and password!");
		}
}

signIn(userNamePrompt, passwordPrompt);

var todos = [
    "clean room",
    "pray",
    "exercise",
    "study",
    "eat"
];

for (var i=0; i < todos.lenght; i++) {
	console.log(i);
}