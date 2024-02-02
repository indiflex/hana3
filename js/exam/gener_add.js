function* add() {
  const a = yield '첫 번째 수?';
  const b = yield '두 번째 수?';
  return a + b;
}

const itAdd = add();
console.log(itAdd.next().value);
console.log(itAdd.next(1).value);
console.log('result=', itAdd.next(2).value);
