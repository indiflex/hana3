import { useSession } from '../hooks/session-context';

export default function Nav() {
  const { session, logout } = useSession();

  return (
    <div style={{ display: 'flex' }}>
      <h1>Hanaro Album</h1>
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
