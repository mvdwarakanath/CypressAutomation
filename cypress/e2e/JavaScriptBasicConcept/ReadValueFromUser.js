
const prompt = require("prompt-sync")();


var name = prompt("What is your name?");
var num = prompt("What is your favorite number? ");

// Uses user input to print out information
console.log("Hello " + name + "!");
console.log(num + "?! That's my favorite number too!");

// Prints out the variable type
//println("Name is a " + typeof name);
//println("Num is a " + typeof num);