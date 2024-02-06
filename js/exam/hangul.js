import assert from 'assert';

const ㄱ = 'ㄱ'.charCodeAt(0);
const ㅎ = 'ㅎ'.charCodeAt(0);
const 가 = '가'.charCodeAt(0);

// 'lLmMnNrR013678';
const JAUM_ALPHA_NUMS = [
  108, 76, 109, 77, 110, 78, 114, 82, 48, 49, 51, 54, 55, 56,
];

const isEndJaum = str => {
  const s = str.charCodeAt(str.length - 1);

  return (
    JAUM_ALPHA_NUMS.includes(s) || (s >= ㄱ && s <= ㅎ) || (s - 가) % 28 > 0
  );
};

assert.strictEqual(isEndJaum('강원도'), false);
assert.strictEqual(isEndJaum('바라당'), true);
assert.strictEqual(isEndJaum('케잌'), true);
assert.strictEqual(isEndJaum('ㅜㅜ'), false);
assert.strictEqual(isEndJaum('점수 A'), false);
assert.strictEqual(isEndJaum('알파벳L'), true);
assert.strictEqual(isEndJaum('24'), false);
assert.strictEqual(isEndJaum('23'), true);

const josa = (str, josaStr) => {
  const [mo, ja] = josaStr.split('/');
  return isEndJaum(str) ? mo : ja;
};

const iga = str => josa(str, '이/가');
const eunun = str => josa(str, '은/는');
const eulul = str => josa(str, '을/를');
const iuya = str => josa(str, '이어야/여야');
const ilang = str => josa(str, '이랑/랑');

assert.strictEqual(`강원도${iga('강원도')}`, '강원도가');
assert.strictEqual(`고성군${iga('고성군')}`, '고성군이');
assert.strictEqual(`강원도${eunun('강원도')}`, '강원도는');
assert.strictEqual(`고성군${eunun('고성군')}`, '고성군은');
assert.strictEqual(`강원도${eulul('강원도')}`, '강원도를');
assert.strictEqual(`고성군${eulul('고성군')}`, '고성군을');
assert.strictEqual(`강원도${iuya('강원도')}`, '강원도여야');
assert.strictEqual(`고성군${iuya('고성군')}`, '고성군이어야');
assert.strictEqual(`강원도${ilang('강원도')}`, '강원도랑');
assert.strictEqual(`고성군${ilang('고성군')}`, '고성군이랑');
