// ⇔ function declareFn(name) {
const expressFn = function(name) {
  // if, 'use strict'?
  this.name = name;
  console.log(this, new.target, this.name, name);
}


const arrowFn = (name) => {
  this.name = name;
  console.log(this, new.target, this.name, name);
}

// expressFn('expfn');
arrowFn('afn');

// const dfn = new expressFn('D');
// const afn = new arrowFn('A'); // error!

console.log('gn>>', globalThis.name)
