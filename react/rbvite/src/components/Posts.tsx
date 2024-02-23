import { useSession } from '../contexts/session-context';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa6';
import { Login } from './Login';
import { useToggle } from '../hooks/toggle';
import { useFetch } from '../hooks/fetch';

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
    <li>
      {post.title}
      <button onClick={() => toggleOpen()}>
        {isOpen ? <FaAngleUp /> : <FaAngleDown />}
      </button>
      {isOpen && <div>{post.body}</div>}
    </li>
  );
};
