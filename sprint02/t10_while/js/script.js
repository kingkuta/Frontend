'use strict'

let n = 10,
    i = 1,
    str = '';

do {
    str += `${n} * ${i} = ${n * i}\n`;
    i += 1;
} while (i <= 10);

alert(str);