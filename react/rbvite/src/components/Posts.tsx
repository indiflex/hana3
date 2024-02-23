import { useEffect, useState } from 'react';
import { useSession } from '../contexts/session-context';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa6';
import { Login } from './Login';
import { useToggle } from '../hooks/toggle';

type PostType = {
  userId: number;
  id: number;
  title: string;
  body: string;
  // isOpen: boolean;
};

const BASE_URL = 'https://jsonplaceholder.typicode.com';

export default function Posts() {
  const {
    session: { loginUser },
  } = useSession();

  const [posts, setPosts] = useState<PostType[]>([]);

  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // const [, toggleReloading] = useToggle();
  // const toggleOpen = (postId: number) => {
  //   const post = posts.find(({ id }) => id === postId)!;
  //   post.isOpen = !post.isOpen;
  //   // setPosts([...posts]); // 정석
  //   toggleReloading(); // 변형
  // };

  useEffect(() => {
    if (!loginUser) return;

    const controller = new AbortController();
    const { signal } = controller;
    (async function () {
      setLoading(true);
      try {
        const res = await fetch(`${BASE_URL}/posts?userId=${loginUser?.id}`, {
          signal,
        });
        const data = (await res.json()) as PostType[];
        // throw new Error('ttt');
        setPosts(data);
        setLoading(false);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        }
      }
    })();

    return () => controller.abort();
  }, [loginUser]);

  return (
    <div className='active'>
      {isLoading && <h1>Fetching Posts...</h1>}
      {error && <h3 style={{ color: 'red' }}>Error: {error}</h3>}
      <h3>#{loginUser?.id}`s Posts</h3>
      <ul className='un-list'>
        {!loginUser && (
          <>
            <h4>로그인 해 주세요!</h4>
            <Login />
          </>
        )}
        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </ul>
    </div>
  );
}

// Best!!
const Post = ({ post }: { post: PostType }) => {
  const [isOpen, toggleOpen] = useToggle();

  return (
    <li key={post.id}>
      {post.title}
      <button onClick={() => toggleOpen()}>
        {isOpen ? <FaAngleUp /> : <FaAngleDown />}
      </button>
      {isOpen && <div>{post.body}</div>}
    </li>
  );
};
