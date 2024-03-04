import { useNavigate } from 'react-router-dom';
import { useSession } from '../hooks/session-context';

export const Nav = () => {
  const { session, logout } = useSession();

  const navi = useNavigate();
  const signOut = () => {
    logout();
    navi('/');
  };

  return (
    <div
      style={{
        position: 'sticky',
        top: 0,
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      <strong style={{ fontSize: '2rem' }}>Hanaro Album</strong>
      {!!session.id && (
        <div>
          <small>{session.id}</small>
          {session.username}
          <button onClick={signOut}>Sign Out</button>
        </div>
      )}
    </div>
  );
};
