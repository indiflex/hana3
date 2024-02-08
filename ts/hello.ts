console.log('Hello, TypeScript!');

function add(a: number, b: number) {
  return a + b;
}

let rapper = 'Tom';
rapper.length; // OK

// console.bulb('No Pain, No Gain!!');
add(1, 2);

interface Console {
  blur(s: string): void;
}

if (console.blur) console.blur('xx');

type UserType = {
  id: number;
  name: string;
} & { city?: string };

interface CityIF {
  city?: string;
}
interface UserIF extends CityIF {
  id: number;
  name: string;
  getName?(): string;
}

class User implements UserType {
  public id: number;
  name: string;
  city?: string;
  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
  getName?(): string {
    return this.name;
  }
}

// const hong: User = { id: 1, name: 'Hong' };
const hongg: User = { id: 1, name: 'Hong' };

const s: string = 'abc';
let i = 1;

const xx = { id: 2, name: 'Kim', addr: 'Seoul' };
const kim: UserIF = { id: 2, name: 'Kim', city: undefined };

type Addr = { id: number; addr?: string };
const choi: Addr = { id: 1, addr: 'Seoul' };

const bt: 'A' | 'B' | 'AB' | 'O' = 'A';
const startHour: 7 = 7;

const n: null = null;
const u: undefined = undefined;

type Member = {
  name: string;
  addr: string;
  discountRate: number;
};
type Guest = {
  name: string;
  age: number;
};

type Customer = Member | Guest;

let customer: Customer;
customer = {
  name: '홍길동',
  addr: '용산구',
  discountRate: 0.1,
};

customer = {
  name: '홍길동',
  age: 26,
};

customer = {
  name: '홍길동',
  addr: '용산구',
  age: 50,
};

let cust: Customer = {
  name: '홍길동',
  age: 26,
  addr: '용산구',
  discountRate: 50,
};

const g = { name: '홍길동', age: 26, addr: '용산구', xxx: 1 };
cust = g;

function mg(user: Member | Guest) {
  if ('discountRate' in user) {
    // if (user.hasOwnProperty('discountRate')) {
    // if (user.hasOwnProperty('discountRate')) {
    // if (Object.hasOwn(user, 'discountRate')) {
    // if (Reflect.has(user, 'discountRate')) {
    console.log(user.addr);
  } else {
    console.log(user.age);
  }
}

class Dog {
  bark() {}
}

class Cat {
  gguk() {}
}

const lucy = new Dog();

function isDog(instance: Dog | Cat) {
  return instance instanceof Dog;
}
if (isDog(lucy)) lucy.bark();

let arr: number[] | number = Math.random() > 0.5 ? [0] : 0;

// if (Array.isArray(arr)) console.log(arr[0]);
// if ('length' in arr) console.log(arr[0]);

let un: { value: number } | undefined;
if (un) un.value = 11;

// const btnRef = useRef<HTMLButtonElement>(null);
// btnRef.value = ?

type TUser = { id: number; name: string };
type TUser2 = { id: number; name: string; addr?: string };

const hong: TUser = { id: 1, name: 'Hong' }; // ?
const lee: TUser2 = { id: 1, name: 'Lee', addr: 'Seoul' }; // OK

let tmpUser: TUser = lee; // ?
let partner: TUser = { ...lee, id: 2, name: 'Kim' }; // ?
// let partner2: TUser = { ...hong, id: 3, addr: 'Daejeon' }; // ?
let friend: TUser = { ...lee }; // ?
const xxx = { id: 9, addr: 'Sokcho' };
// let friend2: TUser = { ...xxx, id: 8 }; // ?

type Novel = {
  [key: string]: string | number | boolean | { id: number } | undefined;
  id: number;
  title: string; // 필수 속성 (실제 사용할 속성)
  addr: { id: number };
  isFree?: boolean;
} & { itemNo: number };

let book: Novel = { id: 1, title: 'IQ84', addr: { id: 300 }, itemNo: 33 };

type ANY = number;
// function addx(a: ANY, b?: ANY) {
function addx(a: ANY, b: number | undefined, c = 1): number {
  return a + (b ?? 0) + c;
}

// function type alias
type F = (a: ANY, b: number | undefined, c: number) => number;

const addy: F = (a, b, c = 1) => a + (b ?? 0) + c;

addx(1, undefined);
addx(1, 2);

let numArr: number[] = [1, 2, 3];
numArr = [1];
let numTuple: [number, number] = [1, 2];
numTuple = [3, 4];

function logSong(song: string | undefined): void {
  if (!song) {
    return; //ok
  }
  console.log(`${song}`);

  return undefined;
  //Type 'boolean' is not assignable to type 'void'.
}

function fail(message: string): never {
  throw new Error(`Invariant Failure : ${message}`);
}

function workWithUnsafeParam(param: unknown) {
  if (typeof param !== 'string') {
    return fail(`param should be a string, not ${typeof param}`);
  }

  // 여기에서 param의 타입은 string으로 알려짐
  return param.toUpperCase();
}

// - overloading
function func(a: number): void;
function func(a: number, b: number, c: number): void;

function func(a: number, b?: number, c?: number) {
  if (typeof b === 'number' && typeof c === 'number') {
    console.log(a + b + c);
  } else {
    console.log(a * 20);
  }
}

func(1);
func(1, 2, 3);

type AF = (n: number) => number;
const af: AF = n => n ** 2;
const af2: AF = function (n) {
  return n ** 3;
};
function af3(n: number) {
  return n ** 4;
}
// --------- this
interface XUser {
  age: number;
  init(this: XUser, y: number): (x: number) => number;
}

let u1: XUser = {
  age: 20,
  init(this: XUser, y: number) {
    return (x: number) => this.age + x * y;
  },
};

let getAge = u1.init(10);
let age = getAge(2);
console.log('🚀  age:', age);

// ----- array
let numbers: (number | string)[];
// let numbers: Array<number>;

numbers = [1, 2, 3, 4, 5]; // OK

// numbers.push('six'); // Error:

interface SomeInterface {
  [key: string]: number;
}
let is: SomeInterface = {
  one: 1,
  two: 2,
};
// delete is['one'];  또는 is['one'] = null;
is['one']?.toFixed(2); // OK

// noUncheckedIndexedAccess
// is['four'].toFixed(2); // false: OK, but Runtime Error in JS!
// is['four'].toFixed(2); // true: Error!

const oneToTen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// noUncheckedIndexedAccess option in tsconfig.json
// false: TypeError: Cannot read properties of undefined (reading 'toFixed')
// true: error TS2532: Object is possibly 'undefined'.
// console.log('oneToTen > ', oneToTen[400].toFixed(2)); // false
// ==> true면 무조건 undefined 일 수 있다고 판단함!
let xidx = 400;
console.log('oneToTen > ', oneToTen[400]?.toFixed(2)); // true

const nums1 = [1, 2, 3, 4, 5];
const nums2 = [10, 20, 30, 40, 50];

const result1 = nums1.concat(nums2);
// 당연히 result1은 number[]

const strings1 = ['lim', 'eun', 'ha'];
// const result2 = result1.concat(strings1); // Error!
const result22 = [...result1, ...strings1]; // OK

type A = {
  name: string;
  age: number;
};

type B = {
  name: string;
  addr: string;
};

const onlyA: A[] = [
  { name: 'lim', age: 10 },
  { name: 'hong', age: 20 },
];
const onlyB: B[] = [
  { name: 'jang', addr: 'Seoul' },
  { name: 'park', addr: 'Busan' },
];
const aOrB = [...onlyA, ...onlyB]; // (A|B)[]
aOrB.push({
  // 가능? 불가능?
  name: 'Tan',
  age: 30,
  addr: 'Incheon',
});

// ------------ tuple
const a: [number, string, boolean] = [1, 'lim', false];
let b: [number, string, boolean] = a;

const greeting = (greet: 'Hi' | 'Hello', name: string, age: number) => {
  console.log(`${greet}~!    
  ${name}(${age})`);
};

type GreetParam = [greet: 'Hi' | 'Hello', name: string, age: number];
const ap1: GreetParam = ['Hi', 'Hong', 30];
const ap2 = ['Hello', 'Kim', 30];
greeting(...ap1);
greeting(...(ap2 as GreetParam));

const tup: [string, number] = ['Lim', 26];
const arrxx = ['Park', 30];

greeting('Hello', ...tup); // OK
greeting('Hi', ...(arrxx as [string, number])); // Error

let cObj = { name: 'Lim', age: 26 } as const;
// cObj의 타입 -> readyonly {name: 'Lim', age: 26}

let dArr = ['hello', 'lim', 26, true] as const;
// dArr의 타입 -> readonly ['hello', 'lim', 26, true]

type TUser22 = { id: number; name: string };
const obj = { id: 1, name: 'aa', addr: '1212' };
let user: TUser = obj;

const kim22 = { id: 2, name: 'Kim', addr: 'Pusan' };
type K22 = keyof typeof kim22;
const users: TUser22[] = [{ id: 3, name: 'aa', addr: '1212' }, kim22];

const dogInfo = ['Jama', 3] as const; // tuple + readonly

const aa = 'a';
let aaa = 'a' as const;

let cObjX = { name: 'Lim', age: 26 } as const;
let dArrX = ['hello', 'lim', 26, true] as const;

let eArr1 = [1, 2, 3] as const;
let eArr2 = [1, 2, 3];
let fArr = [...eArr2] as const; // Error

type A1 = [string, number, string];

// type B1 = [boolean, A1]; // [boolean, [string, number, string] ]
type B1 = [boolean, ...A1]; // [boolean, [string, number, string] ]

const a1: A1 = ['str', 1, 'B'];
const b1: B1 = [true, ...a1];

// array ==> tuple ==> union
// ex) ['A', 'B', 'O', 'AB']
const bts = ['A', 'B', 'O', 'AB'];

type BTS = ['A', 'B', 'O', 'AB'];
type BloodType<T extends unknown[]> = T[number]; // bts[3]

const bloodType: BloodType<BTS> = 'B';

// ****************************** interface
type AT = { page: number };
type BT = { title: string };
type ABT = AT | BT;

const x1: ABT = { title: 'aaa' }; // BT
const x2: ABT = { title: 'aaa', page: 1 }; // AT? BT?
const x3: ABT = { page: 1 }; // AT

x1.title = 'aaa';
// x1.page = 9; // error
// x2.page = 9; // error
// x2['page'] = 99; // error

interface Page {
  readonly text: string;
}

function read(page: Page) {
  console.log(page.text);

  // page.text = 'Hello';
}

const pageIsh = {
  text: 'Hello, world!',
};
pageIsh.text = 'Hello'; //OK Writable

read(pageIsh);

// type ID = { id: number };
interface ID {
  id: number;
}
function fffff(x: ID) {
  return x.id;
}

const xid = { id: 1 };
fffff(xid);

// ------------
interface HasBothFunctionTypes {
  readonly property: () => string; // 속성 구문
  // method(): string; // 메서드 구문
  // readonly method(): string;// Error
  readonly method: () => string; // OK
  property2?: () => string; // optional
  method2?(): string; // optional
}

const hasBoth: HasBothFunctionTypes = {
  property: () => '',
  method() {
    return '';
  },
  property2() {
    return '';
  }, // property2는 속성 구문으로 타입이 정의 되었지만 메서드로 사용 가능
  method2: () => '',
};

hasBoth.property();
hasBoth.property2 && hasBoth.property2();
hasBoth.method();
hasBoth.method2 && hasBoth?.method2();

const counts: {
  apple: number;
  banana: number;
} = { apple: 0, banana: 0 };

counts.apple = 3;
counts.banana = 5;

interface INovel {
  title: string; // 필수 속성 (실제 사용할 속성)
  1: string;
  // [key: number]: string;
  [key: string]: number | boolean | string;
}

const novel: INovel = {
  title: 'novel',
  page: 130,
  1: '111',
};

interface IndexSignature1 {
  [key: number]: string;
  [key: string]: string | number;
}

interface IndexSignature2 {
  // [key: number]: string;
  [key: string]: string | number;
}

const idxsig2: IndexSignature2 = {
  1: 'str',
  2: 22,
  k: 'str',
};

const arr22: Array<number> = [1, 2, 3];
