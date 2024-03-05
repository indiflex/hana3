import CheckBox from '@/components/CheckBox';
import Link from 'next/link';
import { store } from '@/lib/store';
import { Todo } from '../layout';

const getTodo = async (todoId: string) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${todoId}`
  );

  return res.json();
};

export default async function Todos({
  params,
}: {
  params: { todoId: string };
}) {
  const { todoId } = params;
  store.todoId = Number(todoId);
  console.log('🚀  store:', store);
  const { id, title, completed }: Todo = await getTodo(todoId);

  return (
    <>
      <div className=''>
        <div>
          {id}.
          <CheckBox checked={completed} label={title} />
        </div>
      </div>
      <Link href='/todos'>Go to List</Link>
    </>
  );
}
