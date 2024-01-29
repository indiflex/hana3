'use strict';

f = 1;
// NaN = 1;
// Infinity = 0;
console.log('ffff>>', f, NaN, Infinity);
function f(a, aa) {
  console.log('outer f', a);
}
// delete f; // error
console.log('🚀  f:', f);

{
  function f(a) {
    // const f = .. when strict mode
    console.log('block f');
  }
  f(100);
}
console.log('🚀  f2222:', f);
// f(200);
