function myParseInt(str, base) {
    base = base || 10;
    let res = 0;
    let index = 0;
    let flagNegative = 1;
    if (str[0] == '-'){
                 flagNegative = -1;
                 index = 1;
    }
    for(let i = index; i < str.length; i++) {
            if (getCode(str[i]) < base) {
            res = res * base + getCode(str[i]);
            }else {
                return res*flagNegative;}
            }
 return res*flagNegative;
}
function getCode(symbol) {
    symbol = symbol.toLowerCase();
    const codeA = 'a'.charCodeAt();
    const res = symbol <= '9'? +symbol : symbol.charCodeAt() - codeA + 10;
    return res;
}
let str1 = "-123m"
let str2 = "-123.5"
let str3 = "123m"
let str4 = "123.5"
num = parseInt(str1);
myNum = myParseInt(str1);
if (!(num-myNum)){
    console.log('My ParseInt works with negative digits')
}
num = parseInt(str4);
myNum = myParseInt(str4);
if (!(num-myNum)){
    console.log('My ParseInt works with fractional digits')
}
num = parseInt(str1);
myNum = myParseInt(str1);

if (!(num-myNum)){
    console.log('My ToString works with digits correct')
}
function myToString(number, base) {
    let res = '';    
    base = base || 10;
    if (number < 0){
       flagNegative = '-';
    }
    let numberInt = Math.trunc(Math.abs(number));
    do {
        const digit = numberInt % base;
        const symbol = getSymbol(digit);
        res = symbol + res;
        numberInt = Math.trunc(numberInt / base);
    }while(numberInt);
    if (Math.abs(number) != Math.trunc(Math.abs(number))){
        res = res + '.'
        let numberFrac = Math.abs(number);
        do {
            numberFrac = numberFrac*base;
            const digit = Math.trunc(numberFrac % base);
            const symbol = getSymbol(digit);
            res =  res+symbol;
        } while (numberFrac - Math.trunc(numberFrac));
    }
    return flagNegative+res;
}
function getSymbol(digit) {
    const codeA = 'a'.charCodeAt();
    let symbol;
   if (digit < 10) {
    symbol = "" + digit;
   } else {
     const codeAscii = digit - 10 + codeA;
     symbol = String.fromCharCode(codeAscii);
   }
   return symbol;
}
let num100 = -990500;
let str100 = num100.toString();
let myStr100 = myToString(num100);
if (!(str100-myStr100)){
    console.log('My ToString works with negative digits')
}
num200 = -123.45;
str200 = num200.toString();
myStr200 = myToString(num200);
if (!(str200-myStr200)){
    console.log('My ToString works with fractional digits')
}
