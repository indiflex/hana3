import { PropsWithChildren } from 'react';

type Props = {
  name: string;
  age: number;
  plusCount: () => void;
  // children: React.ReactNode;
  // children: React.ReactElement;
};

export const Hello = ({
  name,
  age,
  plusCount,
  children,
}: PropsWithChildren<Props>) => {
  age = age + 1;
  console.log('age>>>>', age);
  return (
    <div style={{ border: '1px solid green' }}>
      <h3>
        Hello, {name} ({age})
      </h3>
      <button onClick={plusCount}>Plus Age</button>
      <div>{children}</div>
    </div>
  );
};
