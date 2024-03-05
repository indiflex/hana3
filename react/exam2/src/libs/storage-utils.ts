export type Session = {
  id: number;
  username: string;
};

const SKEY = 'session-exam2';
export const DefaultSession: Session = {
  id: 0,
  username: '',
};

function getStorage() {
  const storedData = localStorage.getItem(SKEY);
  if (storedData) {
    return JSON.parse(storedData) as Session;
  }

  setStorage(DefaultSession);

  return DefaultSession;
}

function setStorage(session: Session) {
  localStorage.setItem(SKEY, JSON.stringify(session));
}

export { getStorage, setStorage };
