function fiboV1(n) {
  const data = [];
  for (let i = 0; i <= n; i += 1) {
    data.push(i < 2 ? i : data[i - 1] + data[i - 2]);
  }
  return data[n];
}

const data = [];
function fiboV2(n) {
  if (data[n]) return data[n];

  for (let i = data.length; i <= n; i += 1) {
    data.push(i < 2 ? i : data[i - 1] + data[i - 2]);
  }
  return data[n];
}

function memoized(fn) {
  const cache = {};
  return function (k) {
    return cache[k] || (cache[k] = fn(k));
  };
}

const fibo = memoized(function (n) {
  if (n < 2) return n;
  return fibo(n - 1) + fibo(n - 2);
});

console.log(5, fibo(5));
console.log(7, fibo(7));
