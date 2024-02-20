import { Ref, forwardRef, useRef, useState } from 'react';
import { Cart, Session } from '../App';
import { Login } from './Login';
import { Profile } from './Profile';

type Props = {
  session: Session;
  login: (id: number, name: string) => void;
  logout: () => void;
  removeItem: (itemId: number) => void;
  saveItem: (item: Cart) => void;
};

const My = forwardRef(
  (
    {
      session: { loginUser, cart },
      login,
      logout,
      removeItem,
      saveItem,
    }: Props,
    ref: Ref<HTMLButtonElement>
  ) => {
    // const itemIdRef = useRef(0);
    const [currId, setCurrId] = useState(0);

    const itemNameRef = useRef<HTMLInputElement>(null);
    const itemPriceRef = useRef<HTMLInputElement>(null);
    // if (loginUser) loginUser.name = 'XXXXXXX';

    const saveCartItem = (e: React.FormEvent) => {
      e.preventDefault();
      // const id = itemIdRef.current;
      const id = currId;
      console.log('🚀  id:', id);
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
      // itemIdRef.current = 0;
      setCurrId(0);
      itemNameRef.current.value = '';
      if (itemPriceRef.current) itemPriceRef.current.value = '0';
    };
    return (
      <div
        style={{
          border: '2px solid red',
          marginBottom: '2rem',
          padding: '1rem',
        }}
      >
        {loginUser ? (
          <Profile loginUser={loginUser} logout={logout} ref={ref} />
        ) : (
          <Login login={login} />
        )}

        <ul className='un-list'>
          {cart.map(({ id, name, price }: Cart) => (
            <li
              onClick={() => {
                // itemIdRef.current = id;
                setCurrId(id);
                if (itemNameRef.current) itemNameRef.current.value = name;
                if (itemPriceRef.current)
                  itemPriceRef.current.value = price.toString();
              }}
              aria-hidden='true'
              key={id}
              className={`pointer ${currId === id ? 'active' : ''}`}
            >
              <small>{id}.</small>
              {name} ({price.toLocaleString()}원)
              <button onClick={() => removeItem(id)}>X</button>
            </li>
          ))}
        </ul>
        <form onSubmit={saveCartItem} onReset={() => setCurrId(0)}>
          <input type='text' ref={itemNameRef} placeholder='상품명...' />
          <input type='number' ref={itemPriceRef} placeholder='금액...' />
          <button type='reset'>취소</button>
          <button type='submit'>{currId ? '수정' : '추가'}</button>
        </form>
      </div>
    );
  }
);

My.displayName = 'My';

export default My;
