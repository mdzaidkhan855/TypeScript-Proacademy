"use strict";
const users = ['john', 'mark', 'merry'];
console.log(users);
// use spread operators to extract each elements as individual values
console.log(...users);
// Use spread oprator: Create shallow copy of array
const copyDeepArray = users;
/users and copyDeepArray has same refrences. changes in one of them       changes others/;
// here changes in copyShallowArray will not impact original users.
const copyShallowArray = [...users];
// creating an aaray from an existing array
const extendedArray = ['Ravi', 'Manoj', ...users];
console.log(extendedArray);
// Spread operator for Object
const profile = {
    person_name: 'john',
    person_age: 20,
    gender: 'male',
    city: 'london'
};
const employee = Object.assign(Object.assign({}, profile), { role: 'admin' });
console.log(employee);
