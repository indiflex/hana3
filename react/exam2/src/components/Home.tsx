import { useNavigate } from 'react-router-dom';
import { useSession } from '../hooks/session-context';
import { useState } from 'react';

export const Home = () => {
  const { session, login } = useSession();
  const [userId, setUserId] = useState(0);
  const navigate = useNavigate();

  const isNotValidUserId = () => {
    return userId < 1 || userId > 10;
  };

  function signIn() {
    if (!isNotValidUserId()) login(userId);
    navigate('/albums');
  }

  return (
    <>
      <h1>{userId}</h1>
      <input type='text' onChange={e => setUserId(+e.currentTarget.value)} />
      <button onClick={signIn}>Sign-In</button>
      <div>{isNotValidUserId() && 'UserId는 1~10!'}</div>
    </>
  );
};
