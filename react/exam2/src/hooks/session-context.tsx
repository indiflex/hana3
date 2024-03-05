import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useReducer,
} from 'react';
import { DefaultSession, Session, setStorage } from '../libs/storage-utils';
import { useFetch } from './fetch';

const SessionContext = createContext<{
  login: (userId: number) => void;
  logout: () => void;
  session: Session;
}>({
  login: () => {},
  logout: () => {},
  session: DefaultSession,
});

const reducer = (session: Session, payload: Session | null) => {
  session = payload || DefaultSession;
  setStorage(session);
  return session;
};

export const SessionProvider = ({ children }: PropsWithChildren) => {
  const [session, dispatch] = useReducer(reducer, DefaultSession);

  const login = (userId: number) => {
    dispatch({ id: userId, username: '' });
  };

  const logout = () => dispatch(null);

  const { data } = useFetch<Session>({
    url: `users/${session.id}`,
    dependencies: [session.id],
    defaultData: DefaultSession,
    enable: !!session.id,
  });

  useEffect(() => {
    if (data) dispatch(data);
  }, [data]);

  return (
    <SessionContext.Provider value={{ login, logout, session }}>
      {children}
    </SessionContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useSession = () => useContext(SessionContext);
