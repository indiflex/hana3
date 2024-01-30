const syb = Symbol('syb');
const user = {
  '': 1,
  ' ': 1, // 'id': 1, '0y': 2 모두 OK!
  123: 1, // user[123], user['123'] OK, but user.123 is SyntaxError!!
  12345n: 2, // user[12345], user[12345n], user['12345'] OK, but user['12345n'] is undefined!
  true: 1, // OK  user[true]  user.true
  id: 2,
  [`name`]: 'Hong', // But, `name`: 'Hong'은 SyntaxError: Unexpected template string!
  [Symbol()]: 'Hong-Symbol', // OK But, Symbol(): 'Hong'은 SyntaxError: Unexpected token ':'
  [syb]: 'Hong', // OK But, Symbol(): 'Hong'은 SyntaxError: Unexpected token ':'
  [`${new Date()}`]: 365, // OK! 'Sun Jul …': 365
  'my-friends': ['Han', 'Kim'],
  getInfo: () => `P-${this.id}-${this.name}`, // OK! But, this is not user!
  getInfo() {
    return `M-${this.id}-${this.name}`;
  }, // OK! getInfo의 최종 <f.o>
};

// console.log(user);
const x = user.getInfo();
console.log('🚀  x:', x);
const y = user.getInfo;
console.log('🚀  y:', y);
const keys = Object.keys(user);
Object.defineProperty(user, 'id', { enumerable: false });
console.log('🚀  keys:', keys);
delete user.getInfo;
const rKeys = Reflect.ownKeys(user);
console.log('🚀  rKeys:', rKeys);

console.log('syb>>>', user[syb]);
console.log('user entries=', Object.entries(user));
Object.defineProperty(user, syb, { enumerable: false });
function myEntries(obj) {
  const rets = []; // [ [k, v], [k, v], ... ]
  // for (let k in obj) {
  for (let k of Reflect.ownKeys(obj)) {
    console.log(k);
    rets.push([k, obj[k]]);
  }
  return rets;
}
console.log('##############');
console.log('myEntries>>', myEntries(user));
console.log('===============================');
console.log(Object.getOwnPropertyDescriptor(user, 'id'));
console.log('---------------------syb');
console.log(Object.getOwnPropertyDescriptor(user, syb));
console.log('---------------------syb');
// Object.seal(user); // preventExtensions,freeze
Object.defineProperty(user, 'age', {
  value: 39,
  writable: false,
  enumerable: true,
});

user.age = 40;
console.log(Object.getOwnPropertyDescriptors(user));

console.log('===============================');

const emp = Object.assign({ x: 1000 }, user);
user[123] = 2;
console.log('🚀  emp:', emp);
