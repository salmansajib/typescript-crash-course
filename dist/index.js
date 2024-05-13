"use strict";
// Basic Types
let id = 5;
let company = 'Salman Media';
let isPublished = true;
let x = 'Hello';
let age;
age = 32;
let ids = [1, 2, 3, 4, 5];
let arr = [1, true, 'Hello'];
// Tuple
let person = [1, 'Bard', true];
// Tuple Array
let employee;
employee = [
    [1, 'Brad'],
    [2, 'John'],
    [3, 'Jill'],
];
// Union
let pid;
pid = 22;
// Enum
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 0] = "Up";
    Direction1[Direction1["Down"] = 1] = "Down";
    Direction1[Direction1["Left"] = 2] = "Left";
    Direction1[Direction1["Right"] = 3] = "Right";
})(Direction1 || (Direction1 = {}));
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
const user = {
    id: 1,
    name: 'John',
};
// Type Assertion
let cid = 1;
// let customerId = <number>cid;
let customerId = cid;
console.log(typeof customerId);
