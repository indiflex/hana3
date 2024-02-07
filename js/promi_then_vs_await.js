const promi = pid =>
  new Promise(resolve => {
    setTimeout(() => {
      console.log('in-timer', pid);
      resolve({ pid });
    }, 1000);
  });

const posts = [{ id: 1 }, { id: 2 }, { id: 3 }];

function f1(pid) {
  // return promi(pid);
  return promi(pid).then(r => {
    console.log('r=', r);
    return r.pid;
  });
}

async function f2(pid) {
  const obj = await promi(pid);
  return obj.pid;
}

console.time('XXXXX');

// const x1 = await f1(100);
// const x2 = await f2(200);
const [x1, x2] = await Promise.all([f1(100), f1(200)]);
console.log('🚀  x1:', x1);
console.log('🚀  x2:', x2);
console.timeEnd('XXXXX');
console.time('XXXXX2');
const [x11, x22] = await Promise.all([f2(100), f2(200)]);
console.log('🚀  x11:', x11);
console.log('🚀  x22:', x22);
console.timeEnd('XXXXX2');

// const results = posts.map(post => f1(post.id));
// const results = await Promise.all(posts.map(post => f1(post.id)));
// console.log('🚀  results:', results);
