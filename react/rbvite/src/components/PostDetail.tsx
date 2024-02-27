import { useOutletContext, useParams } from 'react-router-dom';
import { PostType } from './Post';
import { useFetch } from '../hooks/fetch';
import { useEffect, useState } from 'react';

export const PostDetail = () => {
  const { post: postData } = useOutletContext<{ post: PostType }>();
  const [post, setPost] = useState<PostType | null>(null);
  const { id } = useParams();
  const { data } = useFetch<PostType>({
    url: `https://jsonplaceholder.typicode.com/posts/${id}`,
    enable: !post,
  });

  useEffect(() => {
    if (postData) {
      setPost(postData);
      return;
    }

    if (data) setPost(data);
  }, [data, postData]);

  return (
    <>
      <div>
        <h1>
          <small className='text-gray-500'>{post?.id}</small>
          상세페이지
        </h1>
        <strong>{post?.title}</strong>
      </div>
      <div>{post?.body}</div>
    </>
  );
};
