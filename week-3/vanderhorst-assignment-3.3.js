/*
============================================
; Title: Assignment 3.3
; Author: Professor Krasso
; Date: 6 March 2018
; Modified By: Johnny Vanderhorst
; Description: Singleton Pattern
;===========================================
*/ 

var header = require('../vanderhorst-header');

/*
 Expected output:

 FirstName LastName
 <AssignmentName>
 <Today's Date>

 Same database instance? true

*/

console.log(header.display("Johnny", "Vanderhorst", "Exercise 3.3")); 
console.log('\n');

// start program
var DatabaseSingleton = (function() {
        var instance;
        function createInstance() {
            var postgresDatabase = new Object("Database instance initialized!");
            return postgresDatabase;
    }

    return {
        getInstance: function() {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    }
})();

function databaseSingletonTest() {
    var oracle = DatabaseSingleton.getInstance();
    var postgres = DatabaseSingleton.getInstance();
    console.log("Same database instance? %s ", oracle === postgres);
}
   
databaseSingletonTest();



// end program

