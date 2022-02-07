"use strict";

function getToDestination(age, isInsured, hasCar, hasMoney, driversNearby) {
    if (age >= 16 && hasCar && isInsured) {
        console.log("You can use your own vehicle.");
    } else if (canGetRideshare(driversNearby, hasMoney)) {
        console.log("You have successfully booked your ride!")
    } else {
        console.log("Call a friend for a ride.");
    }
}

function canGetRideshare (driversNearby, hasMoney) {
    if (driversNearby && hasMoney) {
        return true;
    } else {
        return false;
    }
}

getToDestination(14, true, true, false, true);