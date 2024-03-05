import { useSession } from '../hooks/session-context';

export default function Nav() {
  const { session, logout } = useSession();

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        width: '80vw',
      }}
    >
      <h3 style={{ float: 'left', margin: '0 0.2rem' }}>Hanaro Album</h3>
      {!!session.id && (
        <>
          <small>{session.id}</small>
          {session.username}
          <button onClick={logout}>Sign Out</button>
        </>
      )}
    </div>
  );
}
