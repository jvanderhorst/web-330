/*
============================================
; Title: Assignment 1.4
; Author: Professor Krasso
; Date: 28 February 2018
; Modified By: Johnny Vanderhorst
; Description: Implementing prototype
objects.
;===========================================
*/ 

var header = require('../vanderhorst-header');

/*
 Expected output:

 FirstName LastName
 <AssignmentName>
 <Today's Date>

 The person's full name is '<fullname>.'
 The person's age is '<age>.'

*/

// start program


// object literal with one object
var person = {
    getAge: function () {
        return this.age; 
    }
};

// object literal passing the getAge function
var john = Object.create(person, {
    "age": {
        "value": "40"
    },
    "fullname": {
        "value": "John Summers"
    }
});

john.getAge();


console.log(header.display("Johnny", "Vanderhorst", "Exercise 2.2")); 
console.log('\n');
console.log("The person's full name is " + "'" + john.fullname + "'")
console.log("The person's age is " + "'" + john.age + "'")
// end program


