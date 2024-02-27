import { useSession } from '../contexts/session-context';
import { Login } from './Login';
import { useFetch } from '../hooks/fetch';
import { useLocation, useParams, useSearchParams } from 'react-router-dom';
import { useTimeout } from '../hooks/timeout';
import { useEffect, useState } from 'react';
import Post, { PostType } from './Post';

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
        {posts?.map((post) => <Post key={post.id} postData={post} />)}
      </ul>
    </div>
  );
}
