const f1_org = function (f, val) {
  return f(val); // console.log('abc')
  // fx1(2)
};

const f1 = (f, val) => f(val);

f1(console.log, 'abc');

function fx1(a) {
  return a ** 2;
}

console.log('::>>', f1(fx1, 2));

const f2_org = function (f) {
  return function (...args) {
    return f(...args);
  };
};
const f2 =
  f =>
  (...args) =>
    f(...args);

const X = f2(Math.max);
const result = X(1, 3, 4, 5, 2);
console.log('🚀  result:', result);

console.log('===========================');
// const arr = ['1', '2', '3'];
const arr = new Array('1', '2', '3');

// map( function(item, idx) {})
// function parseInt(str) ==> number
Array.prototype.mapX = function (f) {
  const result = [];
  for (let i = 0; i < this.length; i += 1) {
    result.push(f(this[i], i, this));
  }
  return result;
};
// funciton parseInt(s, radix) {}
const rets = arr.mapX(parseInt); // [ 1, NaN, NaN ]
// parseInt('1', 0, ['1', '2', '3'])
// parseInt('2', 1, ['1', '2', '3'])
// parseInt('3', 2, ['1', '2', '3'])
console.log(rets); // [ 1, NaN, NaN ]

const ret2_org = arr.mapX(function (item) {
  return parseInt(item);
});
const cb = item => parseInt(item);
const ret2 = arr.mapX(cb);
console.log('🚀  ret2:', ret2);

// function(arg) {return fn(arg)}
const unary_org = function (fn) {
  if (fn.length === 1) return fn;
  return function (arg) {
    return fn(arg);
  };
};
const unary = fn => (fn.length === 1 ? fn : arg => fn(arg));

const unaryCb = unary(cb);
console.log('🚀  ret3:', arr.mapX(unaryCb));
const unaryParseInt = unary(parseInt);
console.log('🚀  ret4:', arr.mapX(unaryParseInt));

console.log('🚀  ret5:', arr.mapX(unary(parseInt)));
