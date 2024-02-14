declare global {
  interface Window {
    gName: string;
  }

  interface Array<T> {
    first(): T;
  }
}

type X = string | number;

declare module 'mmm' {
  export const xx: string;
}
