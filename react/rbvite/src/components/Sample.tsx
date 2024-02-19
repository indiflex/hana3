import { ChangeEvent, useState } from 'react';

export default function Sample() {
  const [nickname, setNickname] = useState('HONG');

  const changeNickname = (e: ChangeEvent<HTMLInputElement>) =>
    setNickname(e.currentTarget.value);

  return (
    <>
      <div>
        <h1>Sample</h1>
        <h5>NickName: {nickname}</h5>
        <input type='text' value={nickname} onChange={changeNickname} />
      </div>
    </>
  );
}
