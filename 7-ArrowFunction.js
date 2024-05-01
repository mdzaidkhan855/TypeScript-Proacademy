"use strict";
// Using function decalaration
function print(msg) {
    console.log("Function decalaration", msg);
}
// Using function expression
const sum = function (msg) {
    console.log("function expression", msg);
};
// Using Arrow expression
const add = (msg) => {
    console.log(" Arraow function", msg);
};
const arrFn1 = (num1, num2) => num1 + num2;
const arrFn2 = (num1) => num1 + 10;
const arrFn3 = num1 => num1 + 10;
console.log("arrFn2", arrFn2(10));
console.log("arrFn3", arrFn3(15));
