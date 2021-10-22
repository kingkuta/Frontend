'use strict';

function ifSmall(n) {
    if (n < 10) return (`0${n}`);
    return n;
}

function getFormattedDate(dateObject) {
    let str1, str2,
        day = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    str1 = `${ifSmall(dateObject.getDate())}.${ifSmall(dateObject.getMonth() + 1)}.${dateObject.getFullYear()}`;
    str2 = `${ifSmall(dateObject.getHours())}:${ifSmall(dateObject.getMinutes())} ${day[dateObject.getDay()]}`;

    console.log(ifSmall(dateObject.getDate()));

    return str1 + ' ' + str2;
}






