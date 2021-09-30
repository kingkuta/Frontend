'use strict'

function firstElements(arr, n) {
    let newArr = [];

    for (let i = 0; i <= arr.length - 1 && i <= n - 1; i++) {
        newArr[i] = arr[i];
    }
    return newArr
}
