import assert from 'assert';
import { searchByInitialSound } from '../utils/regexputils.js';
const s = ['강원도 고성군', '고성군 토성면', '토성면 북면', '북면', '김1수'];

// const results = searchByKoreanInitialSound(s, 'ㄱㅅ');
// const results = s.filter(s => s.match(/[ㄱ가-깋][ㅅ사-싷]/));
// console.log('🚀  results:', results);

assert.deepStrictEqual(searchByInitialSound(s, 'ㄱㅇ'), ['강원도 고성군']);
assert.deepStrictEqual(searchByInitialSound(s, 'ㄱㅅㄱ'), [
  '강원도 고성군',
  '고성군 토성면',
]);
assert.deepStrictEqual(searchByInitialSound(s, 'ㅌㅅㅁ'), [
  '고성군 토성면',
  '토성면 북면',
]);
assert.deepStrictEqual(searchByInitialSound(s, 'ㅂㅁ'), [
  '토성면 북면',
  '북면',
]);
assert.deepStrictEqual(searchByInitialSound(s, 'ㅍㅁ'), []);
assert.deepStrictEqual(searchByInitialSound(s, 'ㄱ1ㅅ'), ['김1수']);

// new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log('timeout!!');
//     resolve('xxx');
//     // reject(new Error('ERROR!!!!'));
//   }, 1000);
// })
//   .then(ret => {
//     console.log('THEN!!', ret);
//     return 'TTT';
//   })
//   .catch(err => {
//     console.log({ err });
//     return 'EEE';
//   })
//   .finally(() => console.log('finally!!!!!!', retF));

// try {
//   console.log('inner try');
//   throw new Error('XXXXXXXX');
// } catch (err) {
//   console.error({ err });
// } finally {
//   console.log('finnaly');
// }
