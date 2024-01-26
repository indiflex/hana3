const x = 2;
const userId = 5;
switch (x) {
  case 1:
    console.log('11111', abc);
    break; // 또는 return
  case 2:
    var v = 1;
    const userId = 3;
    console.log('2222222');
  // break;
  case 3:
    console.log('xxxxxxxx+1=3', v, userId);
    break;
  case 4:
    console.log('4', x, x + 1);
    break;
  default:
    console.log('etc');
}

function ifFn0(x) {
  if (x === 1) {
    console.log('11111');
  } else if (x === 2 || x === 3) {
    console.log('2 or 3', x);
    return 23;
  } else {
    console.log('etc');
  }

  return x + 1;
}

function ifFn(x) {
  if (x === 1) {
    console.log('11111');
    return 11;
  }

  if (x === 2 || x === 3) {
    console.log('2 or 3', x);
    return 23;
  }

  // if (x < 1 || x > 3) {
  console.log('etc');
  // }

  return x + 1;
}

ifFn(1);
