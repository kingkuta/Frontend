'use strict';

function transformation() {
    let hero = document.getElementById('hero'), // получаем содержимое (объект)
        lab = document.getElementById('lab');

    if (hero.textContent === 'Bruce Banner') {
        hero.textContent = 'Hulk';
        hero.style.fontSize = '130px';
        hero.style.letterSpacing = '6px';
        lab.style.background = '#70964b';
    } else {
        hero.textContent = 'Bruce Banner';
        hero.style.fontSize = '60px';
        hero.style.letterSpacing = '2px';
        lab.style.background = '#ffb300';
    }
}