import { useEffect, useState } from 'react';
import { useSession } from '../contexts/session-context';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa6';
import { Login } from './Login';

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
  isOpen: boolean;
};

const BASE_URL = 'https://jsonplaceholder.typicode.com';

export default function Posts() {
  const {
    session: { loginUser },
  } = useSession();

  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    if (!loginUser) return;

    const controller = new AbortController();
    const { signal } = controller;
    (async function () {
      setLoading(true);
      const res = await fetch(`${BASE_URL}/posts?userId=${loginUser?.id}`, {
        signal,
      });
      const data = (await res.json()) as Post[];
      setPosts(data);
      setLoading(false);
    })();

    return () => controller.abort();
  }, [loginUser]);

  return (
    <div className='active'>
      {isLoading && <h1>Fetching Posts...</h1>}
      <h1>isLoading: {isLoading ? 'TTT' : 'FFF'}</h1>
      <ul className='un-list'>
        {!loginUser && (
          <>
            <h4>로그인 해 주세요!</h4>
            <Login />
          </>
        )}
        <h1>
          #{loginUser?.id}의 게시글 수: {posts.length}
        </h1>
        {posts.map((post) => (
          <li key={post.id}>
            {post.title}
            <button onClick={() => (post.isOpen = !post.isOpen)}>
              {post.isOpen ? <FaAngleUp /> : <FaAngleDown />}
            </button>
            {post.isOpen && <div>{post.body}</div>}
          </li>
        ))}
      </ul>
    </div>
  );
}
