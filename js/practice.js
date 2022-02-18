"use strict";

function isNumber(input) {

    if (typeof input === 'number') {
        return true;
    } else {
        return false;
    }
}

console.log(isNumber(43));
console.log(isNumber(5));
console.log(isNumber(-6));
console.log(isNumber(0));
console.log(isNumber(false));
console.log(isNumber(true));
console.log(isNumber(9080734));
console.log(isNumber(438.450987));
console.log(isNumber("Hello"));
console.log(isNumber("48"));
console.log(isNumber("0"));


