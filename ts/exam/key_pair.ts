import assert from 'assert';

// O(n^2)
const keyPair2n = (arr: number[], n: number) => {
  for (let i = 0; i < arr.length; i += 1)
    for (let j = i + 1; j < arr.length; j += 1)
      if (arr[i] + arr[j] === n) return [i, j];

  return [];
};

const keyPair = (arr: number[], n: number) => {
  const pairIdx: { [k: number]: number } = {}; // {6: 0, 4:1, }
  for (let i = 0; i < arr.length; i += 1) {
    const val = arr[i];
    if (pairIdx[val]) return [pairIdx[val], i];
    pairIdx[n - val] = i;
  }
};

assert.deepStrictEqual(keyPair([1, 3, 4, 5], 7), [1, 2]);
assert.deepStrictEqual(keyPair([1, 4, 45, 6, 10, 8], 16), [3, 4]);
assert.deepStrictEqual(keyPair([1, 2, 4, 3, 6], 10), [2, 4]);
assert.deepStrictEqual(keyPair([1, 2, 3, 4, 5, 7], 9), [3, 4]);
