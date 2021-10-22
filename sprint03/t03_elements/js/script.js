'use strict';

let liElements = document.getElementsByTagName("li");

for (let i = 0; i <= liElements.length - 1; i++) {
    if (liElements[i].className === "good") {
        i++;
    } else if (liElements[i].className === "evil") {
        i++;
    } else if (liElements[i].className !== "good" && liElements[i].className !== "") {
        liElements[i].classList.remove(liElements[i].className)
        liElements[i].classList.add("unknown");
        i++;
    } else {
        liElements[i].classList.add("unknown");
    }
}


