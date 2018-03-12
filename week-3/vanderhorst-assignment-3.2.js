/*
============================================
; Title: Assignment 3.2
; Author: Professor Krasso
; Date: 6 March 2018
; Modified By: Johnny Vanderhorst
; Description: Factory Pattern
;===========================================
*/ 

var header = require('../vanderhorst-header');

/*
 Expected output:

 FirstName LastName
 <AssignmentName>
 <Today's Date>

 Oracle {
    username: '<username>',
    password: '<password>',
    server: '<server>',
    version: '<version>'
 }

 Informix {
    username: '<username>',
    password: '<password>',
    server: '<server>'
 }

*/

// start program
function Postgres(properties) {
    this.username = properties.username || "admin";
    this.password = properties.password || "s3cret";
    this.server = properties.server || "localhost:5432";
}

function MySql(properties) {
    this.username = properties.username || "ca-admin";
    this.password = properties.password || "ca-s3cret";
    this.server = properties.server || "localhost:8000";
    this.version = properties.version || 5.7
}


function Oracle(properties) {
    this.username = properties.username || "user";
    this.password = properties.password || "password1234";
    this.server = properties.server || "localhost:3000";
    this.version = properties.version || "2.2.1"
}

function Informix(properties) {
    this.username = properties.username || "useradmin";
    this.password = properties.password || "drowssap";
    this.server = properties.server || "localhost:4000";
}

function DatabaseFactory() {}

DatabaseFactory.prototype.databaseClass = Informix;
DatabaseFactory.prototype.createDatabase = function(properties) {
    if (properties.databaseType === "Postgres") {
        this.databaseClass = Postgres;
    } 
    if (properties.databaseType === "MySql") {
        this.databaseClass = MySql;
    } 
    if (properties.databaseType === "Oracle") {
        this.databaseClass = Oracle;
    } 
    if (properties.databaseType === "Informix") {
        this.databaseClass = Informix;
    }

    return new this.databaseClass(properties);
};

var postgresFactory = new DatabaseFactory();
var postgres = postgresFactory.createDatabase({
    databaseType: "Postgres",
    username: "admin",
    password: "SuperSecret"
});

var mySqlFactory = new DatabaseFactory();
var mySql = mySqlFactory.createDatabase({
    databaseType: 'MySQL',
    username: "default",
    password: "password"
});

var oracleFactory = new DatabaseFactory();
var oracle = oracleFactory.createDatabase({
    databaseType: "Oracle",
    username: "BKenobi",
    password: "D3@tH$tAr",
});

var informixFactory = new DatabaseFactory();
var informix = informixFactory.createDatabase({
    databaseType: 'Informix',
    username: "MKnight",
    password: "f@$tc_r"
});


console.log(header.display("Johnny", "Vanderhorst", "Exercise 3.2")); 
console.log(oracle);
console.log(informix);





// end program


