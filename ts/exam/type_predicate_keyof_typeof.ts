// ex1-1)
const isStringNumber = (value: unknown): value is [string, number] =>
  Array.isArray(value) &&
  typeof value[0] === 'string' &&
  typeof value[1] === 'number';

const f1 = (value: number | string | boolean | [string, number]) => {
  if (isStringNumber(value)) {
    console.log(value[0].toUpperCase(), value[1].toFixed());
  }
};

// ex1-2)
interface Animal {}
interface Dog extends Animal {
  name: string;
}
interface Cat extends Animal {
  punch(): void;
}
class Retriever implements Dog {
  constructor(public name: string) {
    this.name = name;
  }
}

function isDog(a: Animal): a is Dog {
  // return a instanceof Retriever; // Dog implements 모든 클래스
  return 'name' in a && !('punch' in a);
}

// ex2-1)
const cart = {
  X: 1,
  Y: 2,
  Z: 3,
};

type T1 = 'X' | 'Y' | 'Z';
type T2 = keyof typeof cart;

// ex2-2)
const constCart = {
  X: 1,
  Y: 2,
  Z: 3,
} as const;

type T3 = 1 | 2 | 3;

type CCT = typeof constCart;
type T5 = CCT[keyof CCT];

type T4 = (typeof constCart)[keyof typeof constCart];

export {};
