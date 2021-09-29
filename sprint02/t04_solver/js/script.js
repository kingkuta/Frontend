function solver(a, b, c, d, e) {
    if (isNaN(a) || isNaN(b) || isNaN(c) || isNaN(d) || isNaN(e))
        console.log("Wrong input");
    else return console.log((a * a - (5 * b * c) + (d / 3) + e).toFixed(2));
}
