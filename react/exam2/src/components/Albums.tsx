import { useNavigate } from 'react-router-dom';
import { useFetch } from '../hooks/fetch';
import { useSession } from '../hooks/session-context';

type AlbumType = {
  userId: number;
  id: number;
  title: string;
};

export default function Albums() {
  const { session } = useSession();
  const navigate = useNavigate();

  const {
    data: albums,
    isLoading,
    error,
  } = useFetch<AlbumType[]>({
    url: `/albums?userId=${session.id}`,
    enable: !!session.id,
  });

  if (!session.id) {
    return navigate('/');
  }

  if (error) return <h1>{error}</h1>;
  if (isLoading) return <h1>Loading...</h1>;

  return (
    <>
      <h1>
        앨범 목록
        <button>앨범 상세보기</button>
      </h1>

      <ul>
        {albums?.map(album => (
          <li key={album.id}>{album.title}</li>
        ))}
      </ul>
    </>
  );
}
