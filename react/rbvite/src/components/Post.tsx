import clsx from 'clsx';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa6';
import { useToggle } from '../hooks/toggle';
import { useFetch } from '../hooks/fetch';
import { useEffect, useState } from 'react';

export type PostType = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

const DefaultPost = {
  userId: 0,
  id: 0,
  title: '',
  body: '',
};

type Props = {
  postId?: number;
  postData?: PostType;
};

const Post = ({ postData, postId }: Props) => {
  const [post, setPost] = useState<PostType | null>(null);
  const [isOpen, toggleOpen] = useToggle();

  const { data, error, isLoading } = useFetch<PostType>({
    url: `https://jsonplaceholder.typicode.com/posts/${postId}`,
    defaultData: DefaultPost,
    enable: !!postId,
  });

  useEffect(() => {
    if (postData) {
      setPost(postData);
      return;
    }

    if (data) {
      setPost(data);
      return;
    }

    //TODO Outlet.context 받은 값으로 처리!
  }, [data, postData]);

  if (error) {
    console.log('🚀  error:', error);
    return <h1 className='text-red-700 font-bold'>{error}</h1>;
  }

  return (
    <>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <li
          className={clsx({
            border: isOpen,
            'border-green-500': isOpen,
            'mx-3': isOpen,
          })}
        >
          <strong
            className={clsx(isOpen && 'text-green-500 underline', 'italic')}
          >
            {post?.title}
          </strong>
          <button
            onClick={() => toggleOpen()}
            className='rounded ml-3 text-blue-700'
          >
            {isOpen ? <FaAngleUp /> : <FaAngleDown />}
          </button>
          {isOpen && <div className='text-sm text-gray-500'>{post?.body}</div>}
        </li>
      )}
    </>
  );
};

export default Post;
