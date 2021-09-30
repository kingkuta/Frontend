'use strict';
let regexName = /^[a-zA-Z]+$/;

String.prototype.capitalize = function () {
    return this.charAt(0).toUpperCase() + this.slice(1);
}


function checkName(firstName, lastName) {
    firstName = prompt("Input your first name").trim();

    if (!regexName.test(firstName)) {
        alert(`Wrong input! ${firstName} - only letter in first name`);
        console.log(`Wrong input! ${firstName} - only letter in first name`)
        checkName();
    } else {
        lastName = prompt("Input your last name").trim();
        if (!regexName.test(lastName)) {
            alert('only letters in last name!');
            console.log(`Wrong input! ${lastName} - only letter in last name`)
            checkName();
        } else {
            alert(`Hello ${firstName.capitalize()} ${lastName.capitalize()}`);
            console.log(`Hello ${firstName.capitalize()} ${lastName.capitalize()}`)
        }
    }
}

checkName();
