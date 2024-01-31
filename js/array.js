const arr = [1, 2, 3];
console.log('🚀  arr:', { ...arr });
console.log('🚀  arr:', arr.entries());
console.log('🚀  arr.length:', arr.length);

// arr.length = 20;
// arr.push(99);
// arr.length = 30;
// arr.push(888);
// console.log('🚀  arr:', arr);
// console.log(
//   'XX',
//   arr.map((_, idx) => idx)
// );
// arr.forEach((item, i) => console.log(i, item));
// return;

const a = Array(3);
console.log('🚀  a:', a);

const ar2 = Array(5).fill(1);
// ar2.fill('X', 2, 4);
ar2.fill('X', -4, -2);
console.log('🚀  a2:', ar2);

const ar3 = Array.from(arr);
arr[1] = 22;
console.log('🚀  arr:', arr);
console.log('🚀  ar3:', ar3);

const ar4 = Array.from([...arr, 4, 5]);
console.log('🚀  ar4:', ar4);

const ar44 = Array.from(Array(5), (_, i) => i + 1);
console.log('🚀  ar44:', ar44);

const ar444 = Array.from(Array(5).keys());
// const ar444 = Array.from(Array(5).values());
// const ar444 = Array.from(Array(5).entries());
console.log('🚀  ar444:', ar444);

// const a41 = Array(5).map((_, i) => i + 1);
const a41 = [...Array(5)].map((_, i) => i + 1);
console.log('🚀  a41:', a41);

const ar5 = [...'abcdef'];
// const ar5 = { ...'abcdef' };
console.log('🚀  ar5:', ar5);

const strs = 'abc'.split('');
console.log('🚀  strs:', strs);

const ar6 = ['ab,cd'.split(',')];
console.log('🚀  ar6:', ar6);
const ar7 = [...'ab,cd'.split(',')];
console.log('🚀  ar7:', ar7);

const ar8 = 'ab,cd'.split(',');
ar8.push('ee');
ar8.push('f');
ar8.pop();
console.log('🚀  ar8:', ar8);

const ax = [1, 2, 3];
const shval = ax.push(55, 66); // [2,3]
console.log('🚀  shval:', shval);
// ax.shift();
ax.unshift(4); // [ 4 , 2, 3]
ax.unshift(44); // [ 44, 4 , 2, 3]
console.log('🚀  ax:', ax);

console.log('----------------------');
const stack = [];
stack.push(1);
stack.push(2, 3);
console.log('🚀  stack:', stack);
console.log('🚀  stack.pop:', stack.pop());
stack.length = 0; // stack = []
stack.unshift(1);
stack.unshift(3, 2);
console.log('🚀  stack:', stack);
console.log('🚀  stack.shift:', stack.shift());
console.log('🚀  stack:', stack);

console.log('----------------------');
const queue = [];
const retPush = queue.push(1);
console.log('🚀  retPush:', retPush);
queue.push(2, 3);
console.log('🚀  queue:', queue);
console.log('🚀  queue.out:', queue.shift());
console.log('🚀  queue:', queue);
queue.length = 0;
queue.unshift(1);
queue.unshift(3, 2);
console.log('🚀  queue:', queue);
console.log('🚀  queue.out:', queue.pop());
console.log('🚀  queue:', queue);

console.log('==============================');
const idxArr1 = arr.indexOf(1);
console.log('🚀  idxArr1:', idxArr1);
const orr = [{ id: 1 }, { id: 2 }, { id: 1 }];
// const idx1 = orr.indexOf({ id: 1 }); // Bad
const idx1 = orr.findIndex(item => item.id === 1);
// const idx1 = orr.findLast(item => item.id === 1);
console.log('🚀  idx1:', idx1);
const didNotFind = idx1 === -1;
console.log('🚀  didNotFind:', didNotFind);

for (const item of orr) console.log(item);
for (const [idx, item] of orr.entries()) console.log(idx, item);
console.log('----------------------');
orr.forEach((item, idx) => console.log(idx, item));
console.log('----------------------');
const mret1 = orr.map((item, idx) => console.log(idx, item));
console.log('🚀  mret1:', mret1);
const overId1 = orr.filter(item => item.id > 1);
console.log('🚀  overId1:', overId1);
const overId2 = orr.filter((item, idx) => {
  console.log(idx, item);
  return item.id > 1;
});
console.log('🚀  overId2:', overId2);
console.log('==============================');
const aa = [1, 2, 3];
console.log('aa>>', aa.join(','));
delete aa[2];
console.log('🚀  aa11:', aa);
aa['a'] = 'AAA';
aa.b = 'BBB';
aa[2.3] = 23;
aa[-1] = -1;
aa[1] = 88;
aa['1'] = 99;
console.log('🚀  aa22:', aa);
console.log('==============================');
const a1 = [1, 2, 3];
const a2 = [4, 5, 6];
const a12 = a1.concat(...a2);
console.log('🚀  a1:', a1, a2);
console.log('🚀  a12:', a12);
const a1_2 = [...a1, ...a2];
console.log('🚀  a1_2:', a1_2);

const a22 = [2, 22];
function myConcat(...args) {
  return [...a22, ...args];
}

const a22_1 = myConcat(3, 33);
console.log('🚀  a22_1:', a22_1);
const a22_2 = myConcat([3, 33]);
console.log('🚀  a22_2:', a22_2);
