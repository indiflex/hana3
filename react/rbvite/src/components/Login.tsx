import {
  FormEvent,
  ForwardedRef,
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
} from 'react';
import { useCounter } from '../contexts/counter-context';
import { useSession } from '../contexts/session-context';
import { useTimeout } from '../hooks/timeout';
import { useToggle } from '../hooks/toggle';

export type LoginHandler = {
  noti: (msg: string) => void;
  focusId: () => void;
  focusName: () => void;
};

// type Props = {};

export const Login = forwardRef((_, ref: ForwardedRef<LoginHandler>) => {
  // const [id, setId] = useState(0);
  const idRef = useRef<HTMLInputElement | null>(null);
  const nameRef = useRef<HTMLInputElement | null>(null);
  // console.log('🚀  idRef:', idRef);
  // const [name, setName] = useState('');
  const { count, plusCount, minusCount } = useCounter();
  const { login } = useSession();

  const handler = {
    noti: (msg: string) => alert(msg),
    focusId: () => idRef.current?.focus(),
    focusName: () => nameRef.current?.focus(),
  };

  useImperativeHandle(ref, () => handler);

  const makeLogin = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // submit 기본 기능을 무력화!
    // console.log(`makeLogin#${idRef.current?.value}#`);

    // if (!idRef.current?.value) {
    // if (!idRef.current || !idRef.current.value) {
    //   alert('User ID를 입력하세요!');
    //   idRef.current?.focus();
    //   return;
    // } else if (!nameRef.current?.value) {
    //   alert('User name을 입력하세요!');
    //   nameRef.current?.focus();
    //   return;
    // }

    const id = Number(idRef.current?.value);
    console.log('🚀  id:', id);
    const name = nameRef.current?.value;
    console.log('🚀  name:', name);
    login(id, name ?? '');
  };

  useEffect(() => {
    // console.log('Please login...');
    plusCount();
    idRef.current?.focus();

    return () => {
      // console.log('logined!');
      minusCount();
    };
  }, [plusCount, minusCount]);

  // const [isShow, setShow] = useState(false);
  const [isShow, toggle] = useToggle();

  // const f = useCallback(() => console.log('isShow=', isShow), [isShow]);
  // const { reset, clear } = useTimeout(f, 1000, [isShow]);

  const { reset, clear } = useTimeout(
    () => console.log('isShow=', isShow),
    isShow ? 1000 : 2000,
    [isShow]
  );

  return (
    <>
      <button onClick={reset}>Reset</button>
      <button onClick={clear}>Clear</button>
      <button
        onClick={toggle}
        style={{ border: `2px solid ${isShow ? 'blue' : 'yellow'}` }}
      >
        {isShow ? 'HIDE' : 'SHOW'}
      </button>
      <form onSubmit={makeLogin}>
        <div>
          <span style={{ marginRight: '1em' }}>{count}-LoginID:</span>
          <input type='number' ref={idRef} />
        </div>
        <div>
          LoginName:
          {/* <input type='text' onChange={(e) => setName(e.currentTarget.value)} /> */}
          <input type='text' ref={nameRef} />
        </div>
        <button type='submit'>Sign-in</button>
      </form>
    </>
  );
});
Login.displayName = 'Login';
