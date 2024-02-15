function log(s: string) {
  console.log('log>>', s);
}
function add(a: number, b: string) {
  return `${a} - ${b}`;
}

function add2(a: number, b: string, c: boolean) {
  return `${a} - ${b} - ${c}`;
}

type FirstArgs<F> = F extends (a: infer First, ...b: any) => any
  ? First
  : never;
type SecondArgs<F> = F extends (a: any, b: infer Second, ...r: any) => any
  ? Second
  : never;

type Args<F> = F extends (...args: infer P) => any ? P[number] : never;

type A = FirstArgs<typeof add>; // number
type B = SecondArgs<typeof add>; // string

type SecondArgs2<F> = F extends (...args: infer P) => any
  ? P[1] extends undefined
    ? never
    : P[1]
  : never;
type BLog = SecondArgs2<typeof log>; // never
type BLog2 = SecondArgs2<typeof add>; // never

type C = Args<typeof add>; // number | string
type C2 = Args<typeof add2>; // number | string | boolean

type EndsWith = typeof String.prototype.endsWith;
type AX1 = Args<EndsWith>;
// ⇒ string | number | undefined
type AX2 = Args<typeof String.prototype.charAt>;
// ⇒ number

export {};
