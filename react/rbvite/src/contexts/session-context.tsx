/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-refresh/only-export-components */
import {
  ReactNode,
  RefObject,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import { ItemHandler } from '../components/My';

type SessionContextProp = {
  session: Session;
  login: (id: number, name: string) => void;
  logout: () => void;
  saveItem: ({ id, name, price }: Cart) => void;
  removeItem: (itemId: number) => void;
  totalPrice: number;
};

// @move to public/data/sample.json!!

const SessionContext = createContext<SessionContextProp>({
  session: { loginUser: null, cart: [] },
  login: () => {},
  logout: () => {},
  saveItem: () => {},
  removeItem: () => {},
  totalPrice: 0,
});

type ProviderProps = {
  children: ReactNode;
  myHandlerRef?: RefObject<ItemHandler>;
};

export const SessionProvider = ({ children, myHandlerRef }: ProviderProps) => {
  const [session, setSession] = useState<Session>({
    loginUser: null,
    cart: [],
  });

  const login = useCallback(
    (id: number, name: string) => {
      const loginNoti = myHandlerRef?.current?.loginHandler.noti || alert;
      console.log('🚀  loginNoti:', loginNoti);

      const focusId = myHandlerRef?.current?.loginHandler.focusId;
      const focusName = myHandlerRef?.current?.loginHandler.focusName;

      if (!id || isNaN(id)) {
        loginNoti('User ID를 입력하세요!');
        if (focusId) focusId();
        return;
      }

      if (!name) {
        loginNoti('User name을 입력하세요!');
        if (focusName) focusName();
        return;
      }

      setSession({ ...session, loginUser: { id, name } });
    },
    [myHandlerRef]
  );

  const logout = useCallback(() => {
    // setSession({ cart: [...session.cart], loginUser: null });
    // session.loginUser = null;
    setSession({ ...session, loginUser: null });
  }, []);

  // add(id=0) or modify(id!=0) item
  const saveItem = useCallback(({ id, name, price }: Cart) => {
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
  }, []);

  const removeItem = useCallback((itemId: number) => {
    console.log('🚀  itemId:', itemId);
    setSession({
      ...session,
      // cart: [...session.cart.filter((item) => item.id !== itemId)],
      cart: session.cart.filter((item) => item.id !== itemId),
    });

    // Virtual-DOM의 rerender() 호출 안함(: session의 주소는 안변했으니까!)
    // session.cart = session.cart.filter((item) => item.id !== itemId);
  }, []);

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;

    (async function () {
      const res = await fetch('/data/sample.json', {
        signal,
      });
      const data = (await res.json()) as Session;
      setSession(data);
    })();

    return () => {
      // controller.abort();
    };
  }, []);

  return (
    <SessionContext.Provider
      value={{ session, login, logout, saveItem, removeItem }}
    >
      {children}
    </SessionContext.Provider>
  );
};

export const useSession = () => useContext(SessionContext);
