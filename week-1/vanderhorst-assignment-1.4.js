/*
============================================
; Title: Assignment 1.4
; Author: Professor Krasso
; Date: 20 February 2018
; Modified By: Johnny Vanderhorst
; Description: Implementing Duck Typing in a 
JavaScript program.
;===========================================
*/ 

var header = require('../vanderhorst-header');

/*
 Expected output:

 FirstName LastName
 <AssignmentName>
 <Today's Date>

 Car added to the racetrack!
 Truck added to the racetrack!
 Jeep added to the racetrack!

 -- The following vehicles have been added to the racetrack --
 Truck: <Model>
 Car: <Model>
 Jeep: <Model>

*/

// start program

// constructor function with one parameter
function Car(model){
    this.model = model;
}
Car.prototype.start = function(){ //prototype method
    console.log("Car added to the racetrack!");
}

// constructor function with two parameters
function Truck(model, year){
    this.model = model;
    this.year = year;
}
Truck.prototype.start = function(){ //prototype method
    console.log("Truck added to the racetrack!");
}

// constructor function with three parameters
function Jeep(model, year, color){
    this.model = model;
    this.year = year;
    this.color = color;
}
Jeep.prototype.start = function(){ //prototype method
    console.log("Jeep added to the racetrack!");
}

// array
var racetrack = [];

//function calls the start function
function  driveIt(vehicle){
    vehicle.start();
    racetrack.push(vehicle);
}

// vehicle classes passed through the driveIt() function
var celica = new Car("Celica");
var fordF150 = new Truck("F150", "2018");
var wrangler = new Jeep("Wrangler", "2016", "white");

console.log(header.display("Johnny", "Vanderhorst", "Exercise 1.4")); 

console.log("");

driveIt(celica);
driveIt(fordF150);
driveIt(wrangler);

// output results
console.log("\n-- The following vehicles have been added to the racetrack --");
for (var x = 0; x < racetrack.length; x++){
    console.log(racetrack[x].constructor.name + ": " + racetrack[x].model);
}

// end program