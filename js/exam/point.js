// chap.2 - 1)

for (let i = 0.1; i < 1; i = i + 0.1) {
  // console.log(Number(i.toFixed(1)));
  console.log(+i.toFixed(1));
}

function getCharLength(x) {
  return (x ?? 0).toString().length;
}

// chap.2 - 2)
function addPoints(a, b) {
  // const ret = +(a + b).toFixed(100).substring(0, 10);

  // const alen = a.toString().length;
  // const blen = b.toString().length;
  // const len = alen > blen ? alen : blen;

  // const len = Math.max(a.toString().length, b.toString().length);
  // const len = Math.max((a ?? 0).toString().length, (b ?? 0).toString().length);
  const len = Math.max(getCharLength(a), getCharLength(b));
  const ret = +(a + b).toFixed(len - 2);
  console.log('🚀  ret:', ret);

  // return operatePoints(a, b, '+');
}

// function operatePoints(operator, ...nums) {

// }

addPoints(0.21354, null); // 0.31354
addPoints(0.14, 0.28); // 0.42
addPoints(0.34, 0.226); // 0.566
