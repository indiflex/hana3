import { xx } from 'mmm';

import { Y } from './types/study';
type XX = string | number | boolean;
const s: number = 1;
const str = 'abc';
console.log('🚀  str:', str.replaceAll('a', 'A'));

let x: X;
let y: Y;
let z: XX;
let zz: string | number;

function add(a: number, b: number) {
  return a + b;
}
add(1, 2);

console.log('xx=', xx);
export {};

interface IUser {
  id: number;
  age: number;
  name: string;
}

interface IDept {
  id: number;
  age: string;
  dname: string;
  captain: string;
}

type Combine<T, U> = {
  [k in keyof (T & U)]: k extends keyof T & keyof U ? T[k] | U[k] : (T & U)[k];
};
type ICombined = Combine<IUser, IDept>;

type X = 'id' | 'userName';
type U = Uppercase<X>;
type L = Lowercase<U>;
type C = Capitalize<X>;
type UC = Uncapitalize<C>;
