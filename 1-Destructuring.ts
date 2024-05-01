/* ARRAY DESTRUCTURING */

let persons = ['john', 'smith', 28];
// const fname = persons[0];
// const lname = persons[1];
// const age = persons[2];

const[fname, lname, age] = persons;
console.log(fname,lname,age);

// skip last one i.e age
const[fname1, lname1] = persons;
console.log(fname1,lname1);

// skip middle one by putting blank commas
const[fname2, , age2] = persons;
console.log(fname2,age2);

// if variables more, there is no error. gennder is undefined
const[fname3,lname3 , age3,gender3] = persons;
console.log(fname3,lname3 , age3,gender3);

// Also can set a default value, if there is none
const[fname4,lname4 , age4,gender4='male'] = persons;
console.log(fname4,lname4 , age4,gender4);

// The default value will be overridden by actual value, if there is some
// the result is : john smith 28 female 
persons = ['john', 'smith', 28, 'female'];
const[fname5,lname5 , age5,gender5='male'] = persons;
console.log(fname5,lname5 , age5,gender5);
