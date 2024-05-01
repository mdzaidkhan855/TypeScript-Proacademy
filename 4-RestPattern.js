"use strict";
let num = [1, 2, 3, 4, 5];
// Rest pattern: always comes to the left
let [a, b, ...rest] = num;
console.log(rest);
// Spread always comes to the right
let arr = [10, 20, ...rest];
console.log(arr);
// Rest Parameters
function addNumbers(...numbers) {
    console.log("numbers are: ", numbers);
}
addNumbers(1, 2);
addNumbers(1, 2, 3);
addNumbers(1, 2, 3, 4, 5, 6);
