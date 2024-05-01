
function printDetails(name:string,age:number,gender:string = 'male'){
    const msg = `Hi, My name is ${name} and I am 
       ${age} years old ${gender}` ;

    console.log(msg);
       
}
printDetails('john',40)
printDetails('merry',30,'female')

// Make sure that default parameter which is gender in this case MUST be LAST parameter
// Also u can send multiple default paramaters, but all of them must be LAST ones
function multileDefaultParam(name:string, age:number, gender:string = 'male', city:string = 'Delhi'){}