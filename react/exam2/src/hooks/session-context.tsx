import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useReducer,
} from 'react';
import {
  DefaultSession,
  getStorage,
  Session,
  setStorage,
} from '../libs/storage-utils';
import { useFetch } from './fetch';
import { useNavigate } from 'react-router-dom';

const SessionContext = createContext<{
  login: (userId: number) => boolean;
  logout: () => void;
  session: Session;
}>({
  login: () => false,
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
  const navigate = useNavigate();

  const login = (userId: number) => {
    if (!userId || userId < 1 || userId > 10) return false;

    dispatch({ id: userId, username: '' });
    return true;
  };

  const logout = () => {
    dispatch(null);
    navigate('/');
  };

  const { data } = useFetch<Session>({
    url: `users/${session.id}`,
    dependencies: [session.id],
    defaultData: DefaultSession,
    enable: !!session.id,
  });

  useEffect(() => {
    if (data) {
      const { id, username } = data;
      dispatch({ id, username });
    }
  }, [data]);

  useEffect(() => {
    dispatch(getStorage());
  }, []);

  return (
    <SessionContext.Provider value={{ login, logout, session }}>
      {children}
    </SessionContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useSession = () => useContext(SessionContext);
