'use strict';

let regexName = /^[a-zA-Z]+$/;
let regexGender = /^(male|female|)$/i;
let regexAge = /^[1-9]{1,5}$/;


function validationInput () {
    let hero = {};

    hero.name = prompt("What animal is the superhero most similar to?");
    if (hero.name.length >= 20) {
        alert("Maximum length is 20 symbols");
        validationInput();
    }
    else if (!regexName.test(hero.name)) {
        alert("only letters!");
        validationInput();
    }

    hero.gender = prompt("Is the superhero male or female? Leave blank if unknown or other.");
    if (regexGender.exec(hero.gender) === null) {
        alert('Error input, try again gender');
        validationInput();
    }

    hero.age = prompt("How old is the superhero?");
    if(hero.age.length >=5){
        alert("Maximum length is 4 symbols for age");
        validationInput();
    } else if (!regexAge.exec(hero.age)){
        alert('Error input, try again');
        validationInput();
    }
    alert(`The superhero name is:${hero.name}-${getDescription(hero)}`)
}

function getDescription(hero) {
    if (hero.age < 18) {
        if (hero.gender === 'male') {
            return 'boy';
        } else if (hero.gender === 'female') {
            return 'girl';
        } else {
            return 'kid';
        }
    } else {
        if (hero.gender === 'male') {
            return 'man';
        } else if (hero.gender === 'female') {
            return 'woman';
        } else {
            return 'hero';
        }
    }
}

validationInput();