function getDigitsSum(number){
    number = Math.trunc(number);
    let sum = 0;
    if (number < 0){
        number = - number;
    }
    while (number > 0) {
        sum = sum + (number % 10);
        number = Math.trunc(number / 10);
    }
    return sum;
    }

function computeExpression(expressionStr){
    return eval(expressionStr);
    //task for searching in Internet
    //only one line code
    //example "9000 / ((10 + 20) **2)", returns 10
}

function printAnanas(){
    console.log (("A" + "AS"/2 +"AS").toLowerCase());
}

function reverse(number){
    number = Math.trunc(number);
    let string = "";
    if (number < 0){
        string = string + "-";
        number = - number;
    }
    while (number > 0) {
        string = string + (number % 10);
        number = Math.trunc(number / 10);
    }
    return string;
    
    // returns string with digits of a given number in the reversed order
    //example reverse(1234) should return "4321" только целая часть
    // revers (-1234) should return "-4321"
}
console.log(getDigitsSum(-100010001.2345)); // check function getDigitsSum
console.log(computeExpression("9000 / ((10 + 20) **2)")); // check function computeExpression
printAnanas(); // check function printAnanas
console.log(reverse(-101001.123)); //check function reverse
