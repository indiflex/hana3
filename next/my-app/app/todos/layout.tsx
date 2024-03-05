import { PropsWithChildren } from 'react';

export type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export default function TodosLayout({ children }: PropsWithChildren) {
  return (
    <>
      <h1>Todos</h1>
      {children}
    </>
  );
}
