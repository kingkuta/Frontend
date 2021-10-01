'use strict';

function sortEvenOdd(arr) {
    arr.sort(function (a, b) {
        return a % 2 - b % 2 || a - b;
    });
}

// const arr = [6, 2, 15, 5, 1, 3, 8, 1, 8, 10, 7, 11];
// console.log(arr)
// sortEvenOdd(arr);
// console.log(arr); // (12) [2, 6, 8, 8, 10, 1, 1, 3, 5, 7, 11, 15


