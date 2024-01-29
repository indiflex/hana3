// O(N)
let runCnt = 0;
// BeforeMemoization!!
// function factorial(n) {
//   runCnt += 1;
//   if (n === 1) return 1;
//   return n * factorial(n - 1);
// }

// O(logN)
const memoizedTable = {};
/* {15: 15 * f(14), 14: 14 * f(13), ... 6: 6 * f(5)}
   {5: 5 * 24, 4: 4 * 6
    3: 3 * 2, 2: 2 * 1}
*/
// memoization version
function factorial(n) {
  runCnt += 1;
  if (n === 1) return 1;
  return memoizedTable[n] || (memoizedTable[n] = n * factorial(n - 1));
}

const f3 = factorial(3);
console.log('🚀  f3:', f3, runCnt);
runCnt = 0;
const f5 = factorial(5);
console.log('🚀  f5:', f5, runCnt);
runCnt = 0;

const f15 = factorial(15);
console.log('🚀  f15:', f15, runCnt);
runCnt = 0;

console.log('======================');
// closure version
function memoized(fn) {
  const memoizedTable = {};
  return function A(k) {
    return memoizedTable[k] || (memoizedTable[k] = fn(k)); // fn: B(k)
  };
}

const memoizedFactorial = memoized(function B(n) {
  runCnt += 1;
  if (n === 1) return 1;
  return n * memoizedFactorial(n - 1);
});

const mf3 = memoizedFactorial(3); // A(3)
console.log('🚀  mf3:', mf3, runCnt);
runCnt = 0;
const mf5 = memoizedFactorial(5);
console.log('🚀  mf5:', mf5, runCnt);
runCnt = 0;

const mf15 = memoizedFactorial(15);
console.log('🚀  mf15:', mf15, runCnt);
