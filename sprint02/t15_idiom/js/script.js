'use strict';
let regexNumber = /^\d$/; /* проверка что это НЕ digit */

function checkIdiom() {
    let number = {};

    number.check = prompt('What kind of idiom?'); /* + перед +prompt для получения digit, а не string */
    /*  проверяю что это не digit 1-9 и не 10 отдельно */
    while (regexNumber.exec(number.check) === null && number.check !== '10') {
        checkIdiom();
    }
    switch (number.check) {
        case '1':
            alert('Back to square 1');
            break;
        case '2':
            alert('Goody 2-shoes');
            break;
        case '3':
        case '6':
            alert('Two\'s company, three\'s a crowd');
            break;
        case '4':
        case '9':
            alert('Counting sheep');
            break;
        case '5':
            alert('Take five');
            break;
        case '7':
            alert('Seventh heaven');
            break;
        case '8':
            alert('Behind the eight-ball');
            break;
        case '10':
            alert('Cheaper by the dozen');
            break;
        default:
            alert('no case');
    }
}

checkIdiom();