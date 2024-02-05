// import { getLastDate } from '../utils/dateutils.js';
// import '../utils/arrayutils.js';
import { getLastDate, rand } from '../utils/index.js';

const d1 = new Date();
try {
  d1.setFullYear(1970);
  d1.setMonth(0);
  throw new Error('xxxxx');
  d1.setDate(1);
  console.log('🚀  d1:', d1);
} catch (error) {
  console.error(error);
} finally {
  console.log('done!');
}

const d2 = new Date();
d2.setFullYear(1970);
d2.setMonth(0);
d2.setDate(2);
console.log('🚀  d2:', d2);

console.log(Math.floor((d2.getTime() - d1.getTime()) / 1000));

console.log('🚀  lastDate11:', getLastDate(2024, 2));
console.log('🚀  lastDate22:', getLastDate(new Date()));

const lastDate = getLastDate(2024, 2);
const dates = Array(5)
  .fill(0)
  .map(() => rand(1, lastDate))
  .map(day => {
    const tmpDate = new Date();
    tmpDate.setDate(day);
    return tmpDate;
  });

console.log(
  '🚀  dates:',
  dates.sort((a, b) => (a > b ? -1 : 1))
);

const weekNames = [...'일월화수목금토'];
const nextYearToday = new Date();
nextYearToday.setFullYear(nextYearToday.getFullYear() + 1);
console.log(
  'next year today week>>',
  `${'일월화수목금토'[nextYearToday.getDay()]}요일`
);

const now = new Date();
now.setDate(+100);
console.log(now);

console.log('==============================\n');
// calendar('2024-02-02')
const calendar = (year, month) => {
  const dt = new Date();
  dt.setFullYear(year);
  dt.setMonth(month - 1);
  dt.setDate(1);

  const days = Array(dt.getDay())
    .fill('')
    .concat(Array.from({ length: getLastDate(dt) }, (_, i) => i + 1));

  console.log('-----------------------');
  console.log(`${' '.repeat(6)}${year}년 ${month}월`);
  console.log(` ${weekNames.join(' ')}`);
  console.log(
    days
      .map(
        (day, idx) =>
          `${day.toString().padStart(3)}${(idx + 1) % 7 === 0 ? '\n' : ''}`
      )
      .join('')
  );
  console.log('-----------------------');
};

calendar(2024, 2);
calendar(2024, 1);
calendar(2025, 2);

const arr = [1, 2, 3];
console.log('ffff>>', arr.first);
