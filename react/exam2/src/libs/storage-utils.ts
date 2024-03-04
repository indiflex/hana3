const SKEY = 'session';
export const DefaultSession: Session = {
  id: 0,
  username: '',
};

export function getStorage() {
  const storedData = localStorage.getItem(SKEY);
  if (storedData) {
    return JSON.parse(storedData) as Session;
  }

  setStorage(DefaultSession);

  return DefaultSession;
}

export function setStorage(session: Session) {
  localStorage.setItem(SKEY, JSON.stringify(session));
}
