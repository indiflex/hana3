import { FormEvent, useRef, useState } from 'react';
import { useSession } from '../hooks/session-context';
import { useNavigate } from 'react-router-dom';

const MSG = 'User ID는 1 ~ 10만 가능합니다!';
export default function Home() {
  const { login } = useSession();
  const [msg, setMsg] = useState(MSG);
  const idRef = useRef<HTMLInputElement>(null);
  const nav = useNavigate();

  const checkUserId = () => {
    const id = Number(idRef.current?.value);

    setMsg('');
    if (!id || id < 1 || id > 10) {
      setMsg(MSG);
    }
    return id;
  };

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const id = checkUserId();
    if (login(id)) {
      nav('/albums');
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        ref={idRef}
        type='number'
        onChange={checkUserId}
        placeholder='UserId...'
      />
      <div>{msg}</div>
      <button type='submit'>Sign In</button>
    </form>
  );
}
