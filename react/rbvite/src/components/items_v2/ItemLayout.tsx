import { Outlet, useNavigate } from 'react-router-dom';
import { useSession } from '../../contexts/session-context';

export const ItemLayout = () => {
  const {
    session: { loginUser },
  } = useSession();

  const navigate = useNavigate();

  return (
    <>
      <header className='flex justify-between mb-2 px-5 bg-cyan-500 text-white'>
        <div>장바구니</div>
        <div>
          {loginUser ? (
            loginUser.name
          ) : (
            <button onClick={() => navigate('/login')}>SignIn</button>
          )}
        </div>
      </header>

      <div className='border border-sky-500 rounded-lg'>
        <Outlet />
      </div>

      <footer className='sticky'>@Copyright Hanaro</footer>
    </>
  );
};
