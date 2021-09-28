/*
    Equation:
    x = a ^ 2 - 5 * b * c + d / 3 + e
    Solve for x.
*/

alert(solver(40, -9, 0.5, 7, 100));
// displays 1724.83

alert(solver(40, "doesn't look like a number", 0.5, 7, 100));
// displays "Wrong input"

alert(solver(40, -9, 0.5, 7));
// displays "Wrong input"