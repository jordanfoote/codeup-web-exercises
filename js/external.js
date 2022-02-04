"use strict";
/*console.log("Hello from external JavaScript");

alert ("Welcome to my Website!");

var userFavColor = prompt("What is your favorite color?");
console.log("You entered " + userFavColor);

alert (userFavColor + " is my favorite color too!");*/
/*var pricePerDay = 3;

var broBear = prompt("How many days would you like to rent Brother Bear?") * pricePerDay;
var littleMerm = prompt("How many days would you like to rent The Little Mermaid?") * pricePerDay;
var herc = prompt("How many days would you like to rent Hercules?") * pricePerDay;

var total = broBear + littleMerm + herc;

alert("Your total cost is $" + total);*/
/*var google = prompt("How many hours did you work at Google?") * 400;
var amazon = prompt("How many hours did you work at Amazon?") * 380;
var meta = prompt("How many hours did you work at Meta?") * 350;

var paycheck = google + amazon + meta;

alert("Your paycheck for this week is $" + paycheck);*/

/*let history = 20;
var maxClassSize = 20;

var doesNotConflict = confirm("Are you already enrolled in this course?");
var answer = confirm("Do you wish to enroll in History? If yes, click OK?");

if (doesNotConflict && answer && history < maxClassSize) {
    history++;
    alert("You have successfully enrolled in History");
} else {
    alert("You cannot enroll in this course");
}*/

let productMin = 3;
let productsInCart = Number(prompt("How many items are in your cart?"));
let expired = confirm("Is this item expired?");

let premiumMember = confirm("Are you a premium member?");

if (premiumMember || !expired && productsInCart >= productMin) {
    alert("Order placed");
} else {
    alert("You are unable to place this order");
}




