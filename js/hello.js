// primitive(call-by-value) vs object(call-by-reference)
const userName = 'Hong'; // string (primitive)
let age; // declare + define  (undefined)
console.log('🚀  age:', age);
age = 33;
console.log(`Hello, ${userName}!`);

// console.log(zz);
// ReferenceError: zz is not defined
// let zz = <NotYetInitialized>; // TDZ ==> 무력화!(Freshness)

zz = 9;
let zz;
console.log(zz);
console.log(globalThis['zz']);
