import { useSession } from '../contexts/session-context';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa6';
import { Login } from './Login';
import { useToggle } from '../hooks/toggle';
import { useFetch } from '../hooks/fetch';
import clsx from 'clsx';
import { useLocation, useParams, useSearchParams } from 'react-router-dom';
import { useTimeout } from '../hooks/timeout';
import { useEffect, useState } from 'react';

type PostType = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

const BASE_URL = 'https://jsonplaceholder.typicode.com';

export default function Posts() {
  const {
    session: { loginUser },
  } = useSession();

  const {
    data: posts,
    isLoading,
    error,
  } = useFetch<PostType[]>({
    url: `${BASE_URL}/posts?userId=${loginUser?.id}`,
    dependencies: [loginUser],
    defaultData: [],
  });

  const { id } = useParams(); // Item.tsx
  console.log('🚀  id:', id);
  const location = useLocation();
  console.log('🚀  location:', location);
  // const state = location.state as { x: number };
  const [searchParams, setSearchParams] = useSearchParams({ q: '' });
  const q = searchParams.get('q');
  const r = searchParams.get('r');
  console.log('🚀  q, r:', q, r);
  useTimeout(() => setSearchParams({ q: 'qqq' }), 1000);
  const [searchStr, setSearchStr] = useState('');
  useEffect(() => {
    setSearchStr(q || '');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className='active'>
      <h1>{searchStr}</h1>
      {isLoading && <h1>Fetching Posts...</h1>}
      {error && <h3 style={{ color: 'red' }}>Error: {error}</h3>}
      <h3>#user{loginUser?.id}`s Posts</h3>
      <ul className='un-list'>
        {!loginUser && (
          <>
            <h4>로그인 해 주세요!</h4>
            <Login />
          </>
        )}
        {posts?.map((post) => <Post key={post.id} post={post} />)}
      </ul>
    </div>
  );
}

// Best!!
const Post = ({ post }: { post: PostType }) => {
  const [isOpen, toggleOpen] = useToggle();

  return (
    <li
      className={clsx({
        border: isOpen,
        'border-green-500': isOpen,
        'mx-3': isOpen,
      })}
    >
      <strong className={clsx(isOpen && 'text-green-500 underline', 'italic')}>
        {post.title}
      </strong>
      <button
        onClick={() => toggleOpen()}
        className='rounded ml-3 text-blue-700'
      >
        {isOpen ? <FaAngleUp /> : <FaAngleDown />}
      </button>
      {isOpen && <div className='text-sm text-gray-500'>{post.body}</div>}
    </li>
  );
};
