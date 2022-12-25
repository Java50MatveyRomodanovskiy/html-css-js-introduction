function getDigitsSum(number){
    number = Math.trunc(number);
    let sum = 0;
    number = Math.abs(number);
    while (number) {
        sum = sum + (number % 10);
        number = Math.trunc(number / 10);
    }
    return sum;
    }

function computeExpression(expressionStr){
    let res;
    try{
    res =    eval(expressionStr);
    
    } catch (e){
        res = NaN;
    }
    return res;
    //task for searching in Internet
    //only one line code
    //example "9000 / ((10 + 20) **2)", returns 10
}

function printAnanas(){
    console.log (("A" + +"A" +"AS").toLowerCase());
}

function reverse(number){
    number = Math.trunc(number);
    let string = "";
    if (number < 0){
        string = string + "-";
        number = - number;
    }
     do {
        string = string + (number % 10);
        number = Math.trunc(number / 10);
    }while (number);
    return string;
    
    // returns string with digits of a given number in the reversed order
    //example reverse(1234) should return "4321" только целая часть
    // revers (-1234) should return "-4321"
}
console.log(getDigitsSum(123)); // check function getDigitsSum
console.log(computeExpression("(9+100)/2)")); // check function computeExpression
printAnanas(); // check function printAnanas
console.log(reverse(-0)); //check function reverse
