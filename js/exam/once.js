// function once(f, thisValue) { // old version
function once(f) {
  let didRun = false;

  return function (...args) {
    // return didRun ? undefined : ((didRun = true), f.apply(this, args));
    if (didRun) return;
    return (didRun = true), f.apply(this, args);
  };
}

// const once = (f) =>
const thisObj1 = { id: 100 };
const thisObj2 = { id: 200 };
console.log(this);
this.id = 999;
// const f = (x, y) => `끝번호 ${x}, ${y}입니다! ${this.id}`;
const f = function (x, y) {
  return `끝번호 ${x}, ${y}입니다! ${this.id}`;
};

// console.log(f.call(thisObj, 1, 6));
// const fn = once(f.bind(thisObj));
const fn = once(f);
// console.log(fn(1, 6)); // 금일 운행금지 차량은 끝번호 1, 6입니다!
console.log(fn.call(thisObj1, 1, 6)); // 금일 운행금지 차량은 끝번호 1, 6입니다!
console.log(fn.call(thisObj2, 2, 7)); // 금일 운행금지 차량은 끝번호 1, 6입니다!
// console.log(fn(2, 7)); // undefined
console.log(fn(3, 8)); // undefined
