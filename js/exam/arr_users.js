const assert = require('assert');

// ex1)
const hong = { id: 1, name: 'Hong' };
const choi = { id: 5, name: 'Choi' };
const kim = { id: 2, name: 'kim' };
const lee = { id: 3, name: 'Lee' };
const park = { id: 4, name: 'Park' };
const users = [kim, lee, park]; // 오염되면 안됨!!

// const addUser = user => users.push(user);
const addUser = user => [...users, user];
const removeUser = user => users.filter(_user => user.id !== _user.id);
const changeUser = (oldUser, newUser) =>
  users.map(_user => (_user.id === oldUser.id ? newUser : _user));

console.log('add>>', addUser(hong)); // [kim, lee, park, hong]
console.log('remove>>', removeUser(lee)); // [kim, park]
console.log('change>>', changeUser(kim, choi)); // [choi, lee, park]

console.log('----------------------------------');
// ex2-1)
const arr2 = [1, 2, 3, true];
const ret1 = arr2.map(item => item.toString());
console.log('🚀  ret1:', ret1);
assert.deepStrictEqual(ret1, ['1', '2', '3', 'true']);

// ex2-2)
const classNamesV1 = (...args) =>
  args.reduce(
    (acc, item) =>
      //  `${acc}${acc && item ? ' ' : ''}${item}`, '');
      `${acc}${acc && item && ' '}${item}`,
    ''
  );
const classNames = (...args) =>
  args.reduce(
    (acc, item) =>
      `${acc}${acc && item && item.trim() && ' '}${
        item && item.trim() && item
      }`,
    ''
  );
const ret2 = classNames('', 'a b c', 'd', '   ', 'e');
console.log('🚀  ret2:', ret2);
assert.strictEqual(ret2, 'a b c d e');

// ex3)
const arr = [1, 2, 3, 4, 5];
const square = n => n ** 2;
const cube = n => n ** 3;
// [1, 4, 9 ....],map
// [1, 2, 3, ....].map
// [1, 8, 27, ...]
const ret3_1 = arr
  .map(square)
  .map(Math.sqrt) // (a) => fn(a)
  .map(cube);
console.log('🚀  ret3_1:', ret3_1);
assert.deepStrictEqual(ret3_1, [1, 8, 27, 64, 125]);

// square(2) ==> Math.sqrt(4) ==> cube(2)
const ret3_2 = [square, Math.sqrt, cube].reduce((acc, f) => f(acc), 2);

const bp1 = n => [square, Math.sqrt, cube].reduce((acc, f) => f(acc), n);
console.log('🚀  ret3_2:', ret3_2, bp1(2));

// const ret3_3 = arr.map(a => bp1(a));
const ret3_3 = arr.map(bp1);
console.log('🚀  ret3_3:', ret3_3);
assert.deepStrictEqual(ret3_3, [1, 8, 27, 64, 125]);

const bpm = (fns, n) => fns.reduce((acc, f) => f(acc), n);

const ret3_4 = bpm([square, Math.sqrt, cube], 2);
console.log('🚀  ret3_4:', ret3_4);
