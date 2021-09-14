let num1 = +prompt("Input beginRange from 1-100");
let num2 = +prompt("Input endRange from 1-100");


if (isNaN(num1) || isNaN(num2)) {
    alert('only number from 1-100')
}  else if (1 > num1 || num1 >= 101) {
    alert(`Your input beginRange ${num1} != range from 1-100`)
} else if (1 > num2 || num2 >= 101) {
    alert(`Your input endRange ${num2} != range from 1-100`)
} else if (num2 < num1) {
    alert('endRange cat\'t be more then beginRange')
}

function checkDivision(beginRage, endRage) {

}

console.log(num1,num2);