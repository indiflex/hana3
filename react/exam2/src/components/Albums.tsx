import { useNavigate, useSearchParams } from 'react-router-dom';
import { useSession } from '../hooks/session-context';
import { useFetch } from '../hooks/fetch';
import clsx from 'clsx';

export const Albums = () => {
  const { session } = useSession();
  const navigate = useNavigate();
  const [param, setParam] = useSearchParams();
  const selectedId = param.get('albumId');
  if (!session.id) navigate('/');
  const { data, isLoading, error } = useFetch<Album[]>({
    url: `/albums?userId=${session.id}`,
    defaultData: [],
    dependencies: [session.id],
    enable: !!session.id,
  });

  if (isLoading) return <h1>Loading...</h1>;
  if (error) return <h1>Error: {error}</h1>;

  return (
    <>
      <h1>
        Albums:: {session.username}::{data?.length}
      </h1>

      <button onClick={() => navigate(`/albums/${selectedId}`)}>
        상세보기
      </button>

      <ul>
        {data?.map(album => (
          <li
            key={album.id}
            className={clsx({ border: Number(selectedId) === album.id })}
          >
            <button
              onClick={() => {
                setParam({ albumId: String(album.id) });
              }}
            >
              {album.title}
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};
