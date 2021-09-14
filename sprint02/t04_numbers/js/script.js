
function checkDivision(beginRage, endRage) {
    beginRage = +prompt("Input beginRange from 1-100");
    endRage = +prompt("Input endRange from 1-100");

    if (isNaN(beginRage) || isNaN(endRage)) {
        alert('only number from 1-100')
        checkDivision();
    } else if (1 > beginRage || beginRage >= 101) {
        alert(`Your input beginRange ${beginRage} != range from 1-100`)
        checkDivision();
    } else if (1 > endRage || endRage >= 101) {
        alert(`Your input endRange ${endRage} != range from 1-100`)
        checkDivision();
    } else if (endRage < beginRage) {
    alert('endRange cat\'t be more then beginRange')
        checkDivision();
    }

    while (beginRage < endRage + 1) {
        if (beginRage % 2 === 0 && beginRage % 3 === 0 && beginRage % 10 === 0) {
            console.log(`${beginRage} is even, a multiple of 3, a multiple of 10`)
        } else if (beginRage % 2 === 0 && beginRage % 3 === 0) {
            console.log(`${beginRage} is even,is a multiple of 3`)
        } else if (beginRage % 2 === 0 && beginRage % 10 === 0) {
            console.log(`${beginRage} is even,a multiple of 10`)
        } else if (beginRage % 3 === 0) {
            console.log(`${beginRage} is a multiple of 3`)
        } else if (beginRage % 2 === 0) {
            console.log(`${beginRage} is even`)
        } else {
            console.log(`${beginRage} - `)
        }
        beginRage +=1;
    }
}

checkDivision();