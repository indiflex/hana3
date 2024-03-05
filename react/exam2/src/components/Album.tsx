import { useParams } from 'react-router-dom';
import { useFetch } from '../hooks/fetch';

type Photo = {
  albumId: number;
  id: number;
  title: string;
  thumbnailUrl: string;
};

export default function Album() {
  const { id } = useParams();
  const {
    data: photos,
    isLoading,
    error,
  } = useFetch<Photo[]>({
    url: `photos?albumId=${id}`,
  });

  const { data: albumInfo } = useFetch<{ title: string }>({
    url: `albums/${id}`,
  });

  if (error) return <h1>{error}</h1>;
  if (isLoading) return <h1>Loading...</h1>;

  return (
    <>
      <h2>{albumInfo?.title}</h2>
      <ul className='photos'>
        {!photos?.length && <h1>Loading...</h1>}
        {photos?.map(({ id, title, thumbnailUrl }) => (
          <li key={id}>
            <img src={thumbnailUrl} alt={title} />
          </li>
        ))}
      </ul>
      <a href={`/albums?albumId=${id}`}>뒤로</a>
    </>
  );
}
