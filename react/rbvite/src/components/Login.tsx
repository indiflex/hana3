import { FormEvent, useRef, useState } from 'react';

type Props = {
  login: (id: number, name: string) => void;
};

export const Login = ({ login }: Props) => {
  // const [id, setId] = useState(0);
  const idRef = useRef<HTMLInputElement | null>(null);
  console.log('🚀  idRef:', idRef);
  const [name, setName] = useState('');

  const makeLogin = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // submit 기본 기능을 무력화!

    console.log(`makeLogin#${idRef.current?.value}#`);

    // if (!idRef.current?.value) {
    if (!idRef.current || !idRef.current.value) {
      alert('User ID를 입력하세요!');
      idRef.current?.focus();
      return;
    }

    const id = idRef.current.value;
    login(+id, name);
  };

  return (
    <>
      <form onSubmit={makeLogin}>
        <div>
          <span style={{ marginRight: '1em' }}>LoginID:</span>
          <input type='number' ref={idRef} />
        </div>
        <div>
          LoginName:
          <input type='text' onChange={(e) => setName(e.currentTarget.value)} />
        </div>
        <button type='submit'>Sign-in</button>
      </form>
    </>
  );
};
