/*
============================================
; Title:  Program Header
; Author: Professor Krasso 
; Date:   25 June 2017
; Modified By: Johnny Vanderhorst
; Description: Displays a formatted header
;===========================================
*/ 

/*
    This function accepts four parameters: 
        f = students first name
        l = students last name 
        a = assignment number
    and displays the results.
*/

var f = "Johnny";
var l = "Vanderhorst";
var a = "Assignment 2.1";

module.exports = {
    display: function(f, l, a) {
        var msg = "\n" + f + " " + l + "\n" 
            + a + "\nDate: " + new Date().toLocaleDateString(); 
        return msg; 
    }
};