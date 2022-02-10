"use strict";

/** EXERCISES FROM CLASS **/

// TODO: Use a while loop to output the numbers from 8-50

// var i = 8;
//
// while (i < 51) {
//     console.log(i);
//     i++;
// }

// TODO: Use a while loop to output the ODD numbers from 8-50

// var x = 8;
//
// while (x < 50) {
//     if (x % 2 === 1) {
//         console.log(x);
//     }
//     x++;
// }

// TODO: Create a while loop that alerts the user of their password being incorrect until they enter it correctly

// let fullNameEntered = false;
// let names = "";
// // WE DON'T KNOW HOW MANY NAMES THEY HAVE!
// do {
//     names += prompt("Please enter or add to your name");
//     fullNameEntered = confirm("Is this your full name?" + names);
//     if (!fullNameEntered) {
//         names += " ";
//     }
// } while (!fullNameEntered){
//     alert("This is your name: " + names);
// }

// // TODO: A parking lot with 30 parking spaces wants to display the amount of spaces available as it gets filled.
//  Let's assume that there are allowing two cars into the parking lot at a time. As those cars take up spaces,
//  write a do-while loop that prints the spaces available. If the parking lot gets filled, print "this parking lot
//  is now full" to the console.

// let numSpaces = 30;
//
// do {
//     console.log("There are " + numSpaces + " remaining.");
//     numSpaces -= 2;
// } while (numSpaces) {
//     console.log("There are no more available parking spots.");
// }

// TODO: using prompt() and alert(), write a while loop that will continue to ask for the correct password until the
//  correct password is given.

// let password = "1234!@#$";
// let attempt = "";
//
// attempt = prompt("Please enter your password.");
//
// while (attempt !== password) {
//     alert("INCORRECT!");
//     attempt = prompt("Please enter your password.");
// }
//
// if (attempt === password) {
//     alert("CORRECT!");
// }