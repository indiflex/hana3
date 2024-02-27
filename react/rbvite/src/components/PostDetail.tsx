import { useOutletContext, useParams } from 'react-router-dom';
import { PostType } from './Post';

export const PostDetail = () => {
  const { post } = useOutletContext<{ post: PostType }>();
  const { id } = useParams();
  if (!post) {
    return <h1>Select Post!!</h1>;
  }

  return (
    <>
      <div>
        <h1>
          <small className='text-gray-500'>{post.id}</small>
          상세페이지
        </h1>
        <strong>{post.title}</strong>
      </div>
      <div>{post.body}</div>
    </>
  );
};
