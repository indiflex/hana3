import { useNavigate, useOutletContext, useParams } from 'react-router-dom';
import { useSession } from '../../contexts/session-context';
import { useEffect, useState } from 'react';
import { FaEdit } from 'react-icons/fa';
import { Button } from '../Button';

export const Item = () => {
  const {
    session: { cart },
  } = useSession();
  const [item, setItem] = useState<Cart>({ id: 0, name: '', price: 0 });
  const { item: contextItem } = useOutletContext<{ item: Cart }>();
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (contextItem) {
      setItem(contextItem);
      return;
    }

    const foundItem = cart.find((item) => item.id === Number(id));
    if (foundItem) {
      setItem(foundItem);
      return;
    }

    // Not-Found
  }, [contextItem, cart, id]);

  return (
    <>
      {!item.id ? (
        <h1 className='text-red-500'>Not Found Item!!</h1>
      ) : (
        <>
          <h1 className='text-lg'>상품 정보</h1>
          {item.name} ({item.price.toLocaleString()}원)
          <Button type='primary'>
            <FaEdit /> Edit
          </Button>
        </>
      )}

      <div>
        <button
          onClick={() => navigate('/v2/items')}
          className='btn-primary mt-5'
        >
          목록
        </button>
      </div>
    </>
  );
};
