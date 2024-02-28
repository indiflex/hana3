import { useOutletContext } from 'react-router-dom';
import { useSession } from '../../contexts/session-context';

type OutletType = {
  setOutletItem: (item: Cart) => void;
};

export const Items = () => {
  const {
    session: { cart },
  } = useSession();

  const { setOutletItem } = useOutletContext<OutletType>();

  return (
    <>
      <h1 className='text-bold text-xl'>Item List</h1>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            <button onClick={() => setOutletItem(item)}>{item.name}</button>
          </li>
        ))}
      </ul>
    </>
  );
};
