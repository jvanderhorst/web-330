/*
============================================
; Title: Assignment 1.3
; Author: Professor Krasso
; Date: 20 February 2018
; Modified By: Johnny Vanderhorst
; Description: Creating a class in 
JavaScript 
;===========================================
*/ 

var header = require('../vanderhorst-header');

/*
 Expected output:

 FirstName LastName
 <AssignmentName>
 <Today's Date>

 -- DISPLAYING CELL PHONE DETAILS --
 Manufacturer: <manufacturer>
 Model: <model>
 Color: <color>
 Price: <price>


*/

// start program

// cellphone object with properties/methods
function cellPhone(manufacturer, model, color, price){
    this.manufacturer = manufacturer;
    this.model = model;
    this.color = color;
    this.price = price;

    this.getPrice = function(){ //function returns the cell phone price
        return this.price;
    }

    this.getModel = function(){ //function returns the cell phone model
        return this.model;
    }

    //function calls the getPrice() and getModel functions and outputs the Manufacturer, Model, Color, and Price
    this.getDetails = function(){ 
        return "Manufacturer: " + this.manufacturer + "\nModel: " + this.getModel() + "\nColor: " + this.color + "\nPrice: " + this.getPrice();
    }
}

var iPhone = new cellPhone("Apple", "iPhone X", "Jet Black", "999.99") //new cell phone object

// end program

// output results
console.log(header.display("Johnny", "Vanderhorst", "Exercise 1.3")); 
console.log('\n');
console.log("-- DISPLAYING CELL PHONE DETAILS --");
console.log(iPhone.getDetails());

