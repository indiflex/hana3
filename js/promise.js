import { rand } from './utils/index.js';
const randTime = new Promise(resolve => {
  const sec = rand(1, 4) * 500;
  setTimeout(() => resolve(sec), sec);
});

randTime.then(x => console.log('sec>>', x, 'ms'));
