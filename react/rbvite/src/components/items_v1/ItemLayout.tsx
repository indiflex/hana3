import { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useSession } from '../../contexts/session-context';

export const ItemLayout = () => {
  const navigate = useNavigate();
  const {
    session: { cart },
  } = useSession();

  const [currItem, setCurrItem] = useState<Cart | null>(null);
  return (
    <>
      <div className='flex flex-row'>
        <ul className='basis-1/2'>
          {cart.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => {
                  setCurrItem(item);
                  navigate(`/v1/items/${item.id}`);
                }}
              >
                {item.name}
              </button>
            </li>
          ))}
        </ul>
        <div className='basis-1/2 border border-green-400 rounded-md'>
          <Outlet context={{ item: currItem }} />
        </div>
      </div>
    </>
  );
};
