'use strict';

let liClassElements = document.getElementsByTagName("li");

for (let i = 0; i <= liClassElements.length - 1; i++) {
    if (liClassElements[i].className === "good") {
    } else if (liClassElements[i].className === "evil") {
    } else if (liClassElements[i].className !== "good" && liClassElements[i].className !== "") {
        liClassElements[i].classList.remove(liClassElements[i].className)
        liClassElements[i].classList.add("unknown");
    } else {
        liClassElements[i].classList.add("unknown");
    }
}
for (let i = 0; i <= liClassElements.length - 1; i++) {
    if (liClassElements[i].getAttribute("data-element") === null) {
        liClassElements[i].setAttribute("data-element", "none");
    }
}

console.log(liClassElements[1].getAttribute("data-element"))


/*
* Проверка валидности данных
* 1. Выводит элементы без класса со значением unknown
* 2. Проверяет и выводит аттрибуты, где их нет присваивает значение  none
* */
// console.log(liClassElements)
// console.log(liClassElements[0].getAttribute("data-element"))
// console.log(liClassElements[1].getAttribute("data-element"))
// console.log(liClassElements[2].getAttribute("data-element"))
// console.log(liClassElements[3].getAttribute("data-element"))
// console.log(liClassElements[4].getAttribute("data-element"))
// console.log(liClassElements[5].getAttribute("data-element"))
// console.log(liClassElements[6].getAttribute("data-element"))
// console.log(liClassElements[7].getAttribute("data-element"))
// console.log(liClassElements[8].getAttribute("data-element"))


