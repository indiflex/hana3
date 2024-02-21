/* eslint-disable react-refresh/only-export-components */
import { PropsWithChildren, createContext, useContext, useState } from 'react';

export type LoginUser = { id: number; name: string };
export type Cart = { id: number; name: string; price: number };
export type Session = {
  loginUser: LoginUser | null;
  cart: Cart[];
};

type SessionContextProp = {
  session: Session;
  login: (id: number, name: string) => void;
  logout: () => void;
  saveItem: ({ id, name, price }: Cart) => void;
  removeItem: (itemId: number) => void;
};

const SampleSession: Session = {
  loginUser: null,
  // loginUser: { id: 1, name: 'Hong' },
  cart: [
    { id: 100, name: '라면', price: 3000 },
    { id: 101, name: '컵라면', price: 2000 },
    { id: 200, name: '파', price: 5000 },
  ],
};

const SessionContext = createContext<SessionContextProp>({
  session: { loginUser: null, cart: [] },
  login: () => {},
  logout: () => {},
  saveItem: () => {},
  removeItem: () => {},
});

export const SessionProiver = ({ children }: PropsWithChildren) => {
  const [session, setSession] = useState<Session>(SampleSession);

  // TODO: validation checking!!
  const login = (id: number, name: string) => {
    // console.log('🚀  id name :', id, name, myHandlerRef.current);

    // if (!myHandlerRef.current) return;
    // const loginNoti = myHandlerRef.current.loginHandler.noti;
    // console.log('🚀  loginNoti:', loginNoti);
    // if (!loginNoti) return;

    // const focusId = myHandlerRef.current.loginHandler.focusId;
    // const focusName = myHandlerRef.current.loginHandler.focusName;

    if (!id || isNaN(id)) {
      alert('User ID를 입력하세요!');
      // if (focusId) focusId();
      return;
    }

    if (!name) {
      alert('User name을 입력하세요!');
      // loginNoti('User name을 입력하세요!');
      // if (focusName) focusName();
      return;
    }

    setSession({ ...session, loginUser: { id, name } });
  };
  const logout = () => {
    // setSession({ cart: [...session.cart], loginUser: null });
    // session.loginUser = null;
    setSession({ ...session, loginUser: null });
  };

  // add(id=0) or modify(id!=0) item
  const saveItem = ({ id, name, price }: Cart) => {
    const { cart } = session;
    const foundItem = id !== 0 && cart.find((item) => item.id === id);
    if (!foundItem) {
      id = Math.max(...session.cart.map((item) => item.id), 0) + 1;
      cart.push({ id, name, price });
    } else {
      foundItem.name = name;
      foundItem.price = price;
    }

    setSession({
      ...session,
      // cart,
      // cart: [...cart],
    });
  };

  const removeItem = (itemId: number) => {
    console.log('🚀  itemId:', itemId);
    setSession({
      ...session,
      // cart: [...session.cart.filter((item) => item.id !== itemId)],
      cart: session.cart.filter((item) => item.id !== itemId),
    });

    // Virtual-DOM의 rerender() 호출 안함(: session의 주소는 안변했으니까!)
    // session.cart = session.cart.filter((item) => item.id !== itemId);
  };

  return (
    <SessionContext.Provider
      value={{ session, login, logout, saveItem, removeItem }}
    >
      {children}
    </SessionContext.Provider>
  );
};

export const useSession = () => useContext(SessionContext);
