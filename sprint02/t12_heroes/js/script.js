'use strict'


var heroes = ["Captain America", "Hulk", "Thor", "Iron Man", "Spider-Man"];
console.log(heroes)

function firstElements(arr, n) {
    let newArr = [];

    for (let i = 0; i <= n - 1; i++) {
        newArr[i] = arr[i];
    }
    if (n > arr.length) {
        return newArr.splice(arr.length,n)
    }


}


// console.log(firstElements(heroes, 5));
// // // ["Captain America", "Hulk", "Thor", "Iron Man", "Spider-Man"]
// //
// console.log(firstElements(heroes, 1));
// // // ["Captain America"]
// //
// console.log(firstElements(heroes, 3));
// // // ["Captain America", "Hulk", "Thor"]
//
console.log(firstElements(heroes, 8));
// // ["Captain America", "Hulk", "Thor", "Iron Man", "Spider-Man"]
//
// console.log(firstElements(heroes, -1));
// // // []