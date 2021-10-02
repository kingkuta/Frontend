describe("pow", function() {

    it("Провеяет количество лишних скобок в строке, выводит -1 если это не строка", function() {
        assert.equal(checkBrackets('1)()(())2(()'), 2);
    });
    it("Провеяет количество лишних скобок в строке, выводит -1 если это не строка", function() {
        assert.equal(checkBrackets(NaN), -1);
    });
    it("Провеяет количество лишних скобок в строке, выводит -1 если это не строка", function() {
        assert.equal(checkBrackets(''), -1);
    });
    it("Провеяет количество лишних скобок в строке, выводит -1 если это не строка", function() {
        assert.equal(checkBrackets(null), -1);
    });
    it("Провеяет количество лишних скобок в строке, выводит -1 если это не строка", function() {
        assert.equal(checkBrackets(123), -1);
    });
    it("Провеяет количество лишних скобок в строке, выводит -1 если это не строка", function() {
        assert.equal(checkBrackets(true), -1);
    });
    it("Провеяет количество лишних скобок в строке, выводит -1 если это не строка", function() {
        assert.equal(checkBrackets('dfh()())))))(()()()( J LKJ)()()'), 6);
    });
    it("Провеяет количество лишних скобок в строке, выводит -1 если это не строка", function() {
        assert.equal(checkBrackets('((((((())(())(())))))'), 1);
    });
    it("Провеяет количество лишних скобок в строке, выводит -1 если это не строка", function() {
        assert.equal(checkBrackets('()()()()()()()()()'), 0);
    });
    it("Провеяет количество лишних скобок в строке, выводит -1 если это не строка", function() {
        assert.equal(checkBrackets('()()()()))((()(())(())(())(())'), 4);
    });
    it("Провеяет количество лишних скобок в строке, выводит -1 если это не строка", function() {
        assert.equal(checkBrackets('()()()((())(())(())(())'), 1);
    });
    it("Провеяет количество лишних скобок в строке, выводит -1 если это не строка", function() {
        assert.equal(checkBrackets('90909())()() 09-0 )((())((sd))(())(())'), 3);
    });
    it("Провеяет количество лишних скобок в строке, выводит -1 если это не строка", function() {
        assert.equal(checkBrackets('90909())()() 09-0 )((())((sdsd)(())(())'), 4);
    });
    it("Провеяет количество лишних скобок в строке, выводит -1 если это не строка", function() {
        assert.equal(checkBrackets('90909())()() 09-0 )(((dsds))(())(())(())'), 3);
    });
    it("Провеяет количество лишних скобок в строке, выводит -1 если это не строка", function() {
        assert.equal(checkBrackets('90909())()() 09-0 (())(())(())(())'), 1);
    });
    it("Провеяет количество лишних скобок в строке, выводит -1 если это не строка", function() {
        assert.equal(checkBrackets('90909())()() 09-0 )(())(())'), 2);
    });
    it("Провеяет количество лишних скобок в строке, выводит -1 если это не строка", function() {
        assert.equal(checkBrackets('90909())()() 09-0 \''), 1);
    });
    it("Провеяет количество лишних скобок в строке, выводит -1 если это не строка", function() {
        assert.equal(checkBrackets('90909())()()())(())'), 2);
    });
    it("Провеяет количество лишних скобок в строке, выводит -1 если это не строка", function() {
        assert.equal(checkBrackets('()( LK )() I )()('), 2);
    });

});



console.log(checkBrackets('1)()(())2(()'));
console.log(checkBrackets(NaN));
console.log(checkBrackets(''));
console.log(checkBrackets(null));
console.log(checkBrackets(123));
console.log(checkBrackets(true));

console.log(checkBrackets('dfh()())))))(()()()( J LKJ)()()'));
console.log(checkBrackets('((((((())(())(())))))'));
console.log(checkBrackets('()()()()()()()()()'));
console.log(checkBrackets('()()()()))((()(())(())(())(())'));
console.log(checkBrackets('()()()((())(())(())(())'));
console.log(checkBrackets('90909())()() 09-0 )((())((sd))(())(())'));
console.log(checkBrackets('90909())()() 09-0 )((())((sdsd)(())(())'));
console.log(checkBrackets('90909())()() 09-0 )(((dsds))(())(())(())'));
console.log(checkBrackets('90909())()() 09-0 (())(())(())(())'));
console.log(checkBrackets('90909())()() 09-0 )(())(())'));

console.log(checkBrackets('90909())()() 09-0 '));
console.log(checkBrackets('90909())()()())(())'));
console.log(checkBrackets('()( LK )() I )()('));