let inputValue = +prompt("Input number from 1 to 4");

switch (inputValue) {
    case 1:
        alert(`${inputValue * 2 / 'a'}`);
        break;
    case 2:
        alert(`${(inputValue - inputValue) / 0}`);
        break;
    case 3:
        alert(`${0 * Infinity}`);
        break;
    case 4:
        alert(`${inputValue * 40000000 === Infinity}`);
        break;
    default:
        alert("Wrong input")
        break;
}

