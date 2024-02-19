import { useState } from 'react';

type Props = {
  login: (id: number, name: string) => void;
};

export const Login = ({ login }: Props) => {
  const [id, setId] = useState(0);
  const [name, setName] = useState('');

  return (
    <>
      <form>
        <div>
          <span style={{ marginRight: '1em' }}>LoginID:</span>
          <input type='text' onChange={(e) => setId(+e.currentTarget.value)} />
        </div>
        <div>
          LoginName:
          <input type='text' onChange={(e) => setName(e.currentTarget.value)} />
        </div>
        <button onClick={() => login(id, name)}>Sign-in</button>
      </form>
    </>
  );
};
