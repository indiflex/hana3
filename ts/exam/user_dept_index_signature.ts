interface User {
  id: number;
  name: string;
}

interface Dept {
  id: number;
  dname: string;
  captain: string;
}

// type Ud2 = (User | Dept) & {addr: string};

// interface Ud2 extends Partial<User>, Partial<Dept> {
interface Ud2 {
  [idx: string]: string | number;
  id: number;
  addr: string;
}

const ud2: Ud2 = { id: 1, name: 'HH', addr: 'Seoul' };
const ud3: Ud2 = { id: 1, dname: 'HH', captain: 'HH', addr: 'Seoul' };
