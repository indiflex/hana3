import { useNavigate, useOutletContext, useParams } from 'react-router-dom';
import { useSession } from '../../contexts/session-context';
import { useEffect, useState } from 'react';
import { FaEdit } from 'react-icons/fa';
import { Button } from '../ui/Button';

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
          <div>
            {item.name} ({item.price.toLocaleString()}원)
            <Button
              onClick={() =>
                navigate(`/v2/items/${item.id}/edit?itemId=${item.id}`)
              }
              variant='default'
              className='ml-5'
              title='수정하기'
            >
              <FaEdit />
            </Button>
          </div>
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
