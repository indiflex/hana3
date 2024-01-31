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
console.log(
  '🚀  a22-isArray:',
  Array.isArray(a22),
  typeof a22,
  typeof null,
  typeof { id: 1 }
);

// [3, 33]
// [ [5,55] ]
function myConcat(...args) {
  // if (Array.isArray(args[0])) {
  //   return [...a22, ...args[0]];
  // } else {
  //   return [...a22, ...args];
  // }
  const argsArr = Array.isArray(args[0]) ? args[0] : args;
  return [...a22, ...argsArr];
}

const a22_1 = myConcat(3, 33);
console.log('🚀  a22_1:', a22_1);
const a22_2 = myConcat([5, 55]);
console.log('🚀  a22_2:', a22_2);

console.log('==============================');

//         1 5 ==> 1   5
//         4 5 ==> 4   5
//         4 1 ==> 1 4  5
//        11 4 ==> 1 4 11  5
//        11 5 ==> 1 4 5  11
//         7 5 ==> 1 4 5   11 7
//        11 7 ==> 1 4 5 7 11
const a5 = [1, 5, 4, 11, 7];
console.log('🚀  a5-sort:', [...a5].sort());
console.log(
  '🚀  a5-sort-fn:',
  a5.sort((a, b) => {
    console.log('a,b=', a, b);
    // return a > b ? -1 : 1;
    // return a - b;
    return b - a;
  })
);
console.log('🚀  a5:', a5);
console.log('🚀  a5-reverse:', [...a5].reverse());

const a6 = ['Kim', 'Lee', 'Hong'];
console.log('🚀  a6:', a6.sort());

const users = [
  { id: 1, name: 'Hong' },
  { id: 20, name: 'Kim' },
  { id: 3, name: 'Lee' },
];
console.log(
  'users.sort>>',
  [...users].sort((a, b) => a.id - b.id)
);
console.log('🚀  users:', users);

console.log('-------------------------------');
const arr2 = [1, 2, 3, 4, 5];

// ex1) [2,3]을 추출
const ex1 = arr2.slice(1, 3);
console.log('🚀  ex1:', ex1);

// ex2) [3]부터 모두 다 추출
const ex2 = arr2.slice(2);
console.log('🚀  ex2:', ex2);

// ex3) [2,3,4] 제거하기
const ex3 = arr2.splice(1, 3);
console.log('🚀  ex3:', ex3, arr2);

// ex4) 복원하기
arr2.splice(1, 0, ...ex3);
console.log('🚀  ex4:', arr2);

// ex5) [3] 부터 끝까지 제거하기
const ex5 = arr2.splice(2);
console.log('🚀  ex5:', arr2, ex5);

// ex6) 복원하기
arr2.splice(2, 0, ...ex5);
console.log('🚀  ex6:', arr2);

// ex7) [1,2, 'X', 'Y', 'Z', 4, 5] 만들기
const ex7 = [...arr2];
ex7.splice(2, 1, 'X', 'Y', 'Z');
console.log('🚀  ex7:', ex7);

console.log('🚀  arr2:', arr2);
// ex8) 위 7번 문제를 splice를 사용하지 말고 작성하시오.
const ex8 = [...arr2.slice(0, 2), 'X', 'Y', 'Z', ...arr2.slice(-2)];
console.log('🚀  ex8:', ex8);
