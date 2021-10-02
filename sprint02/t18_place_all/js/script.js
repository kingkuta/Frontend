'use strict';

function sortEvenOdd(arr) {
    arr.sort(function (a, b) {
        return (a & 1) - (b & 1) || a - b;
    });
}

// const arr = [3, 2, 1, 4];
// console.log(arr)
// sortEvenOdd(arr);
// console.log(arr); // (12) [2, 6, 8, 8, 10, 1, 1, 3, 5, 7, 11, 15

