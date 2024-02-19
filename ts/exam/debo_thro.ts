const debounceOrg = (cb: (...args: unknown[]) => void, delay: number = 0) => {
  let timer: ReturnType<typeof setTimeout>;
  return (...args: unknown[]) => {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(cb, delay, ...args);
  };
};
const debounce = <T>(cb: (...args: T[]) => void, delay: number = 0) => {
  let timer: ReturnType<typeof setTimeout>;
  return (...args: T[]) => {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(cb, delay, ...args);
  };
};

const throttle = (cb: (...args: any[]) => void, delay: number = 0) => {
  let timer: ReturnType<typeof setTimeout> | null;
  return (...args: any[]) => {
    if (timer) return;
    timer = setTimeout(() => {
      cb(...args);
      timer = null;
    }, delay);
  };
};

// test
const debo = debounce(a => {
  if (typeof a === 'number') console.log('debo=', a + 1);
}, 1000);
for (let i = 10; i < 15; i += 1) debo(i); // 15

const thro = throttle(a => console.log('thro=', a + 1), 1000);
for (let i = 10; i < 15; i += 1) thro(i); // 11

enum BTX {
  A = 'A',
  B = 'B',
  AB = 'AB',
  O = 'O',
}

function btype(bt: BTX) {
  // if (bt === BTX.A) {
  if (bt === 'A') {
  }
}

type User = { id: number; name: string; age: number };
type PartialUser = Partial<User>;

type UserRequiredProps = 'id' | 'name';
type X = Pick<User, UserRequiredProps>;
type Y = Partial<Omit<User, UserRequiredProps>>;
type Z = X & Y;
export {};
