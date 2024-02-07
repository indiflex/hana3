'use strict';

// module.export = {} // CJS
// export { }; // ESM

// const assert = require('assert'); // CJS
// import assert from 'assert'; //ESM

globalThis.name = 'GGGGGGGG';
this.x = 1;

// ⇔ function declareFn(name) {
const expressFn = function (name) {
  // if, 'use strict';
  // this.name = name;
  console.log(new.target, this?.name, name, globalThis.name);
};

const arrowFn = name => {
  this.name = name;
  console.log(this, this.name, name);
};

expressFn('expfn');
expressFn.bind({ name: 'Hong' })('expfn');
// arrowFn('afn');

// const dfn = new expressFn('D');
// const afn = new arrowFn('A'); // error!

console.log('gn>>', globalThis.name);
