// import { Navigate } from 'react-router-dom';

import { useNavigate } from 'react-router-dom';
import { useTimeout } from './hooks/timeout';

export const NotFound = () => {
  console.log('NotFound>>>', location.pathname);
  const navigate = useNavigate();
  // useTimeout(() => navigate('/'), 2000);
  useTimeout(() => navigate(-1), 2000);
  return (
    <h1>
      <strong className='text-red-500'>{location.pathname}</strong> Page Not
      Found (404)
    </h1>
  );

  // return <Navigate to='/' />;
};
