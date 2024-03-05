import { FormEvent, useRef, useState } from 'react';
import { useSession } from '../hooks/session-context';

const MSG = 'User ID는 1 ~ 10만 가능합니다!';
export default function Home() {
  const { login } = useSession();
  const [msg, setMsg] = useState(MSG);
  const idRef = useRef<HTMLInputElement>(null);

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const id = Number(idRef.current?.value);
    if (!id || id < 1 || id > 10) {
      setMsg(MSG);
      return;
    }

    login(id);
  };

  return (
    <form onSubmit={submitHandler}>
      <input ref={idRef} type='number' placeholder='UserId...' />
      <div>{msg}</div>
      <button type='submit'>Sign In</button>
    </form>
  );
}
