
// Using function decalaration
function print(msg:string){
    console.log("Function decalaration", msg);
    
}
// Using function expression
const sum = function(msg:string){
    console.log("function expression", msg);
}

// Using Arrow expression
const add = (msg:string)=>{
    console.log(" Arraow function",msg);
} 

const arrFn1 = (num1:number,num2:number) => num1 + num2;

const arrFn2 = (num1:number) => num1 + 10;

const arrFn3:(n:number)=>number = num1 => num1 + 10;

console.log("arrFn2",arrFn2(10));
console.log("arrFn3",arrFn3(15));
