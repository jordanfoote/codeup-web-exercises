"use strict";

/** EXERCISE FROM JAVA CODEUP CURRICULUM (BREAK AND CONTINUE) **/

var oddNumber = promptForNumber(1, 50);
oddNumber = parseInt(oddNumber);

printWithSkip(1, 50, oddNumber);

function printWithSkip(low, high, skipNumber) {
    for (let i = low; i <= high; i++) {
        if (i === skipNumber || i % 2 === 0) {
            if (i === skipNumber) {
                console.log("Yikes! Skipping number: " + i);
            }
            continue;
        }
        console.log("Here is an odd number: " + i);
    }
}
// console.log(oddNumber);

function promptForNumber (low, high) {

    var result;

    while (true) {
        var result = prompt("Please enter a number from " + low + " to " + high + ".");
        // console.log(result);
        if (result !== null && result % 2 === 1 && result >= low && result <= high) {
            break;
        }
    }
    // console.log(result);
    return result;
}