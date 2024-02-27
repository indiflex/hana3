import { useRef } from 'react';
import { useSession } from '../../contexts/session-context';

// index(add) page
export const Items = () => {
  const { saveItem } = useSession();
  const itemNameRef = useRef<HTMLInputElement>(null);
  const itemPriceRef = useRef<HTMLInputElement>(null);

  const saveCartItem = (e: React.FormEvent) => {
    e.preventDefault();
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

    saveItem({ id: 0, name, price });
    itemNameRef.current.value = '';
    if (itemPriceRef.current) itemPriceRef.current.value = '0';
  };
  return (
    <>
      <form onSubmit={saveCartItem}>
        <input type='text' ref={itemNameRef} placeholder='상품명...' />
        <input type='number' ref={itemPriceRef} placeholder='금액...' />
        <button type='reset' className='mx-3'>
          취소
        </button>
        <button type='submit' className='btn-primary'>
          추가
        </button>
      </form>
    </>
  );
};
