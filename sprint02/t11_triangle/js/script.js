'use strict'

function triangle(n) {
    let str = '';
    for (let i = 0; i < n; i++) {
        for (let j = 0; j <= i; j++) {
            str += '*';
        }
        str += '\n';
    }
    alert(str)
}

triangle(6);
