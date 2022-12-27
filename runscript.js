alert("Hello there!!!")
function keyless_entry(){
	var age =prompt("what is your age?");
	if (Number(age ===18)){
		alert("congratulations,powering on,enjoy your ride");
	}
	else if (Number(age === null)) {
		alert("enter a valid answer.");
	}
	else if (Number(age < 18)) {
		alert("sorry, too young to drive,power off.");
	}
	else if (Number(age > 18)) {
		alert("welcome,powering on,have a nice ride");
	}
	
}
keyless_entry()

// simple facebook
var database = [
   {
   	username : "johnny brasco",
   	password : "pocolee"
   }
];

var newsfeed = [
   {
   	username : "sandra",
   	timeline : "i hate marketing on a sunny day"
   },
   {
   	username : "matilda",
   	timeline : "it feels so good loving someone that loves u"
   }
];

var userNamePrompt = prompt("username");
var passwordPrompt = prompt("password");

function signin(user, pass) {
		if (user === database[0].username && pass === database[0].password) {
			console.log(newsfeed);
		}else {
			alert("invalid username")
		}
}		

signin(userNamePrompt, passwordPrompt);
// for loop!
var todos = [
	"clean room",
	"brush teeth",
	"exercise",
	"study javascript",
	"eat healthy"
];

for (var i=0; i < todos.lenght; i++) {
	console.log(todos[i] + "!");
}

for (var i=0;  i < todos.lenght; i++) {
	console.log(todos[i] = todos[i] +"i");
}

// while loop
var counterOne = 1
while (counterOne < 10) {
	console.log("while", counterOne);
	counterOne++;
}  
// This can also be run backwards.

var counterTwo = 10
while(counterTwo > 0){
	console.log("while", counterTwo);
	counterTwo--;
}

