"use strict";
const user = {
    person_name: 'john',
    person_age: 20,
    gender: 'male',
    city: 'london'
};
// Array destructuring requires square brackets, whereas object detsructuring
// requires curly braces {}. Also property name should match for destructuring
const { person_name, person_age, gender, city } = user;
console.log(person_name, person_age, gender, city);
// destructuring using alias name
const { person_name: p_name, person_age: p_age, gender: p_gender, city: p_city } = user;
console.log(p_name, p_age, p_gender, p_city);
