import clsx from 'clsx';
import Link from 'next/link';
import { store } from '@/lib/store';
import { Todo } from './layout';

const getTodos = async () => {
  const { userId } = store;
  console.log('🚀  storexxx:', store);
  console.log('getTodos>>>', userId);
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/todos?userId=${userId}`,
    { cache: 'no-store' }
  );

  return res.json();
};

export default async function Todos() {
  const todos: Todo[] = await getTodos();
  return (
    <>
      <ul>
        {todos.map(({ id, title, completed }) => (
          <li key={id} className={clsx({ 'line-through': completed })}>
            <Link href={`/todos/${id}`}>{title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
