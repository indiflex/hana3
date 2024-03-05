import { useNavigate, useSearchParams } from 'react-router-dom';
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
  const [query, setQuery] = useSearchParams();
  const selectedAlbumId = query.get('albumId');

  const {
    data: albums,
    isLoading,
    error,
  } = useFetch<AlbumType[]>({
    url: `/albums?userId=${session.id}`,
    dependencies: [session.id],
    enable: !!session.id,
  });

  if (!session.id) {
    navigate('/');
    return;
  }

  if (error) return <h1>{error}</h1>;
  if (isLoading) return <h1>Loading...</h1>;

  return (
    <>
      <h3>
        앨범 목록
        <a href={`/albums/${selectedAlbumId}`}>앨범 상세보기</a>
      </h3>

      <ul style={{ listStyle: 'none' }}>
        {albums?.map(({ id: albumId, title }) => (
          <li
            key={albumId}
            className={`${albumId === Number(selectedAlbumId) && 'active'}`}
          >
            <button onClick={() => setQuery({ albumId: String(albumId) })}>
              <small>{albumId}.</small> {title}
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
