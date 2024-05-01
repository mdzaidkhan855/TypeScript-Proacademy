
const temp = 'null';

// if temp is null OR undefined OR empty string('') or any falsy value,
// storage1 is 'default', otherwise whatever value is there in temp
let storage1 = temp || 'default'
console.log(storage1);

// if temp is null OR undefined, storage1 is 'default', otherwise whatever value is 
// there in temp. So in case temp is '', storage2 is also '', NOT default 
let storage2 = temp ?? 'default'
console.log(storage2);
