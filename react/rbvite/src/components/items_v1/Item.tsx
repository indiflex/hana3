import { useEffect, useReducer, useRef, useState } from 'react';
import { useOutletContext, useParams } from 'react-router-dom';
import { useSession } from '../../contexts/session-context';
type Prop = {
  item: Cart;
  toggleEditing: () => void;
};

function ItemRead({ item, toggleEditing }: Prop) {
  return (
    <div className='text-right p-5'>
      <div className='border-b border-gray-300'>
        <small className='float-start'>상품명:</small>
        {item?.name}
      </div>
      <div className='border-b border-gray-300'>
        <small className='float-start'>금액:</small>
        {item?.price.toLocaleString()}원
      </div>
      <div className='pt-5 pr-3'>
        <button onClick={toggleEditing} className='btn-primary'>
          수정
        </button>
      </div>
    </div>
  );
}

// type Field = 'name' | 'price';

const ItemUpdate = ({ item, toggleEditing }: Prop) => {
  const { saveItem } = useSession();
  const [isDirty, setDirty] = useState(false);

  const itemNameRef = useRef<HTMLInputElement>(null);
  const itemPriceRef = useRef<HTMLInputElement>(null);

  // const checkDirty = (e: ChangeEvent<HTMLInputElement>) => {
  const checkDirty = () => {
    // const inpName: Field = e.currentTarget.name as Field;
    // const inpRef = e.currentTarget.name === 'name' ? itemNameRef : itemPriceRef;
    // setDirty(inpRef.current?.value !== item[inpName]);

    // cf
    setDirty(
      itemNameRef.current?.value !== item.name ||
        Number(itemPriceRef.current?.value) !== item.price
    );
  };

  const saveCartItem = (e: React.FormEvent) => {
    e.preventDefault();
    // const id = itemIdRef.current;
    const id = item.id;
    const name = itemNameRef.current?.value;
    const price = Number(itemPriceRef.current?.value);
    if (!name) {
      alert('상품명을 정확히 입력하세요!');
      itemNameRef.current?.focus();
      return;
    } else if (isNaN(price) || !price) {
      alert('가격을 정확히 입력하세요!');
      itemPriceRef.current?.focus();
      return;
    }

    saveItem({ id, name, price });
    toggleEditing();
  };

  useEffect(() => {
    if (itemNameRef.current) itemNameRef.current.value = item.name;
    if (itemPriceRef.current) itemPriceRef.current.value = String(item.price);
    itemNameRef.current?.select();
  }, [item]);

  return (
    <form onSubmit={saveCartItem} onReset={toggleEditing} className='p-5'>
      <input
        type='text'
        name='name'
        ref={itemNameRef}
        placeholder='상품명...'
        className='border-2 border-sky-300 rounded-md'
        onChange={checkDirty}
      />
      <input
        type='number'
        name='price'
        ref={itemPriceRef}
        placeholder='금액...'
        className='border-2 border-sky-300 rounded-md mt-2'
        onChange={checkDirty}
      />
      {isDirty && (
        <div className='p-5'>
          <button type='reset' className='mx-5'>
            취소
          </button>
          <button type='submit' className='btn-primary'>
            수정
          </button>
        </div>
      )}
    </form>
  );
};

// detail(read | update)
export const Item = () => {
  // const [item, setItem] = useState<Cart | null>(null);
  const [item, setItem] = useState<Cart>({ id: 0, name: '', price: 0 });
  const { item: itemData } = useOutletContext<{ item: Cart }>();
  const { id } = useParams();
  const {
    session: { cart },
  } = useSession();

  useEffect(() => {
    if (!itemData && id && cart.length) {
      setItem(cart.find((cartItem) => cartItem.id === +id)!);
    } else if (itemData) {
      setItem(itemData);
    }
  }, [cart, id, itemData]);

  const [isEditing, toggleEditing] = useReducer((pre) => !pre, false);

  return (
    <>
      {isEditing ? (
        <ItemUpdate item={item} toggleEditing={toggleEditing} />
      ) : (
        <ItemRead item={item} toggleEditing={toggleEditing} />
      )}
    </>
  );
};
