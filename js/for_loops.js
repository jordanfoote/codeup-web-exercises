"use strict";

/** EXERCISE FROM CLASS **/

// TODO: Use a for loop to print the even numbers between 0 and 30, inclusive.
//  HINT: remember the remainder operator (modulo)

// for (var i = 0; i <= 30; i++) {
//
//     if (i % 2 === 0) {
//         console.log(i);
//     }
// }

// TODO: loop through numbers 1 - 40. Print "marco" if it's divisible by 3. Print "polo" if it's divisible by 5.
//  -> If it's neither print "I'm not playing"
//  -> Print "marco polo" if it's divisible by 3 and 5.

// for (let i = 1; i <= 40; i++) {
//
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log(i + " MARCO POLO");
//     } else if (i % 3 === 0) {
//         console.log(i + " marco");
//     } else if (i % 5 === 0) {
//         console.log(i + " polo");
//     } else {
//         console.log(i + " I'm not playing");
//     }
// }

/** EXERCISES FROM JAVA CODEUP CURRICULUM (FOR LOOPS)**/

/** Exercise 2 **/

// function showMultiplicationTable (num) {
//     var i = 1;
//
//     while (i < 11) {
//         console.log(i + " * " + num + " = " + (i * num));
//         i++;
//     }
// }
//
// showMultiplicationTable(5);

/** Exercise 3 **/

// for (var i = 0; i < 10; i++) {
// 
//     let randomNumber = Math.floor(Math.random() * 200) + 20;
// 
//     if (randomNumber % 2 === 0) {
//         console.log(randomNumber + " is even");
//     } else {
//         console.log(randomNumber + " is odd");
//     }
// }

/** Exercise 4 **/

// for (var x = 1,  y = 1; x < 10; x++, y++) {
//     let output = x.toString();
//     console.log(output.repeat(y));
// }

/** Exercise 5 **/

// for (var i = 100; i >= 5; i--) {
//
//     while (i % 5 === 0) {
//         console.log(i);
//         i--;
//     }
// }