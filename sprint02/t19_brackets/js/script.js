function checkBrackets(str) {
    let res = '';
    let flag = false;
    let count = 0;
    let stack = 0;



    if (!(typeof(str) === "string")) {
        return -1;
    }
    if(str.length === 0) {
        return -1;
    }
    for (i = 0; i < str.length; i++) {
        if(str[i] === '(' || str[i] === ')') {
            res += str[i];
        }
    }
    if(res.length === 0) {
        return -1;
    }

    for (i = 0; i < res.length; i++) {
        if(res[i] === '(') {
            stack++;
        }
        else if (stack > 0) {
            stack--;
        }
        else {
            count++;
        }
    }



    //console.log(res);
    //console.log(count + stack);
    return count + stack;
}
//checkBrackets('1)()(())2(()');