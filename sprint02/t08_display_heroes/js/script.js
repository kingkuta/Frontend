function displayHeroes(team, universe, race, eyeColor, hairColor) {
    if (team === "Avengers" || team === "S.H.I.E.L.D" && universe === "Marvel" && race === "human"
        && eyeColor === "green" && hairColor === "lightBrown/green")
        return alert("This is Black Widow!");
    else if (team === "Justice League Of America" || team === "Teen Titans" && universe === "DC Comics"
        && race === "human" || race === "kryptonian" && eyeColor === "blue" && hairColor === "black")
        return alert("This is a Superman or Robin!");
    else alert("Didn't recognize!");
}

displayHeroes();

// displayHeroes("S.H.I.E.L.D", "Marvel", "human", "green", "lightBrown/green");
// displayHeroes("Justice League Of America", "DC Comics", "human", "blue", "black");
// displayHeroes("Teen Titans", "DC Comics", "kryptonian", "blue", "black");