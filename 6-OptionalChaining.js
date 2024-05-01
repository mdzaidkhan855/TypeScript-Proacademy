"use strict";
var _a;
const products = [
    { name: 'mobile', price: '5000', details: { color: 'black', ram: '10' } },
    { name: 'cloth', price: '1200', details: { color: 'black', size: '10' } },
    { name: 'books', price: '200', pages: '100', author: 'john' }
];
for (let prod of products) {
    console.log('name' + prod.name);
    console.log('***********************');
    console.log('price' + prod.price);
    console.log('color' + ((_a = prod.details) === null || _a === void 0 ? void 0 : _a.color));
    console.log('***********************');
}
