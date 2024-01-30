function f(a) {
  return a ** 2;
}

const af = a => a ** 2;

console.log(f(3));
console.log(af(3));

function f2(a, b) {
  const c = a ** b;
  return Math.sqrt(c);
}

const af2 = (a, b) => {
  const c = a ** b;
  return Math.sqrt(c);
};

console.log(f2(3, 4));
console.log(af2(3, 4));

function gugudan(a) {
  return function (b) {
    return a * b;
  };
}

const fff = a => b => {
  for (let i = 1; i < 10; i += 1) console.log(`${a} x ${i} = ${a * i}`);
};

const gugu2dan = gugudan(2);
const gugu3dan = gugudan(3);
console.log(gugu2dan(15));
console.log(gugu3dan(17));

console.log('------------------');
globalThis.y = 10;
// var y = 10;
function bfn_fd(x) {
  console.log(x, this.y);
}

const bfn = x => console.log(x, this.y);

// bfn(9);
bfn.bind({ y: 999 })(7);

console.log('=========================');
globalThis.name = 'GlobalName';
var name = 'VarName';
this.name = 'ModuleName';
// this.age = 99;
console.log('tttttttttttt>>>', this);
const obj = {
  name: 'ObjName',
  addr: { city: 'Seoul', road: this.name },
  bark1() {
    console.log('1=', this.name);
    const self = this;
    setTimeout(function () {
      console.log('11=', self.name);
    }, 1000);
    console.log('xxxx');
  },
  bark2() {
    console.log('2=', this.name);
    setTimeout(() => {
      console.log('22=', this.name);
    }, 1000);
  },
  f1: function () {
    console.log('f1>>', this.name, this);
  },
  f2: () => {
    console.log('f2>>', this.name, this);
  },
};
console.log('type>>', typeof obj.f1, typeof obj.f2);

// obj.bark1();
// obj.bark2();
// obj.f1();
// obj.f2();

const xxx1 = obj.f1;
const xxx2 = obj.f2;

const oname = obj.name;
const a = obj.addr;
console.log('🚀  o:', obj.addr);
console.log('🚀  a:', a);
// xxx1();
xxx2();

// obj.f1.bind({ name: 'X1' })();
// obj.f2.bind({ name: 'X2' })();
// console.log('ggggg>>', globalThis.name);
