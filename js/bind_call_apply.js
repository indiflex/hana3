function f(id, addr) {
  console.log(this, id, addr, this.name);
}

const obj = { name: 'Hong' };

const bf = f.bind(obj);
bf(1, 'SungSoo');

f.apply(obj, [2, 'Seoul']);
f.call(obj, 2, 'Pusan');
