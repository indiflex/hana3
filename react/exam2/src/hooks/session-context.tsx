/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-refresh/only-export-components */
import {
  PropsWithChildren,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useReducer,
} from 'react';
import { DefaultSession, getStorage, setStorage } from '../libs/storage-utils';

type SessionContextProp = {
  session: Session;
  login: (id: number) => void;
  logout: () => void;
};

const SessionContext = createContext<SessionContextProp>({
  session: DefaultSession,
  login: () => {},
  logout: () => {},
});

const reducer = (session: Session, payload: Session | null) => {
  session = payload || DefaultSession;
  setStorage(session);
  return session;
};

const BASE_URL = 'https://jsonplaceholder.typicode.com';

export const SessionProvider = ({ children }: PropsWithChildren) => {
  const [session, dispatch] = useReducer(reducer, DefaultSession);

  const login = useCallback((id: number) => {
    (async function () {
      const res = await fetch(`${BASE_URL}/users/${id}`);
      const data = await res.json();
      const { username } = data;
      dispatch({ id, username });
    })();
  }, []);

  const logout = useCallback(() => {
    dispatch(null);
  }, []);

  useEffect(() => {
    dispatch(getStorage());
  }, []);

  return (
    <SessionContext.Provider value={{ session, login, logout }}>
      {children}
    </SessionContext.Provider>
  );
};

export const useSession = () => useContext(SessionContext);
