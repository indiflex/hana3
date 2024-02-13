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

type Change<T, K extends keyof T, U> = {
  [k in keyof T]: k extends K ? U : T[k];
};
type DeptCaptain = Change<IDept, 'captain', IUser>;
// type Err = Change<IDept, 'somekey', IUser>; // Error!!!

type Item = { item: string; price: number };
type ItemPrice<T, U> = {
  [k in keyof T]: k extends 'item' ? keyof U : T[k];
};

const stock = { X: 1, Y: 2, Z: 30 };

const itemPrices: ItemPrice<Item, typeof stock>[] = [
  { item: 'X', price: 1000 },
  { item: 'Y', price: 2000 },
  { item: 'Z', price: 3000 },
];

const total = itemPrices.reduce(
  (curr, itemPrice) => curr + stock[itemPrice.item] * itemPrice.price,
  0
);
