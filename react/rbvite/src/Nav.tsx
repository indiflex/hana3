import { Link } from 'react-router-dom';

export const Nav = () => (
  <nav>
    <ul className='flex justify-around text-blue-500'>
      <li>
        <Link to='/' replace>
          Home
        </Link>
      </li>
      <li>
        <Link to='/login'>Login</Link>
      </li>
      <li>
        <Link to='/my'>My</Link>
      </li>
      <li>
        <Link to='/posts'>Posts</Link>
      </li>
      <li>
        <Link to='/hello'>Hello</Link>
      </li>
    </ul>
  </nav>
);
