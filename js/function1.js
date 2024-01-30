function hello() {
  const [name] = arguments; // ['Hong', 'Kim']
  console.log(`Hello, ${name}!`, arguments);
  return `Hello, ${name}!`;
}

hello('Hong', 'Kim');
const hi = hello;
hi('Kim');
console.log('>>', hi.length, hi.name);

function printFnReturnValue(...args) {
  console.log('🚀  args:', args);
  const [fn, nm] = args;
  console.log('printFnRet>>>', fn.name, fn(nm));
}
printFnReturnValue(hi, 'Lee');

console.log('-----------------------------');
function f(n) {
  if (n.hasOwnProperty('id')) n.id += 1;
  else n += 1; // n = n + 1
}

let n = 10;
let nobj = { id: 10 };
f(n); // call by value
f(nobj); // call by reference
console.log(n, nobj);
console.log('-----------------------------');
function ff(a) {
  return a + 100;
}
function ff(a, b) {
  return a + b;
}
console.log(ff(10));
console.log(ff(10, 20));

(function () {
  console.log('IIFE');
})();
// iif();
