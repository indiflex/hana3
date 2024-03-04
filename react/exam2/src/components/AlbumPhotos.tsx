import { useNavigate, useParams } from 'react-router-dom';
import { useFetch } from '../hooks/fetch';
import { useSession } from '../hooks/session-context';

type Photo = {
  albumId: number;
  id: number;
  thumbnailUrl: string;
  title: string;
};

export const AlbumPhotos = () => {
  const { session } = useSession();
  const navigate = useNavigate();
  if (!session.id) navigate('/');
  const { id: albumId } = useParams();

  const { data, isLoading, error } = useFetch<Photo[]>({
    url: `/photos?albumId=${albumId}`,
  });

  if (isLoading) return <h1>Loading...</h1>;
  if (error) return <h1>Error: {error}</h1>;

  return (
    <>
      <h1>
        AlbumPhotos: {albumId}::{data?.length}
      </h1>
      <a href={`/albums?albumId=${albumId}`}>목록</a>
      <div className='photos'>
        {data?.map(photo => (
          <img key={photo.id} src={photo.thumbnailUrl} alt={photo.title} />
        ))}
      </div>
    </>
  );
};
