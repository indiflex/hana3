import { ChangeEvent, useState } from 'react';

const CITIES = ['서울', '대전', '대구', '부산', '창원'];

export default function Sample() {
  const [nickname, setNickname] = useState('HONG');
  const [address, setAddress] = useState('서울');
  const [age, setAge] = useState(0);

  const changeNickname = (e: ChangeEvent<HTMLInputElement>) => {
    setNickname(e.currentTarget.value);
    console.log('***************', nickname);
  };

  return (
    <>
      <div>
        <h5>
          NickName: {nickname}({age}세) - {address}
        </h5>
        <input type='text' value={nickname} onChange={changeNickname} />
        <input
          type='text'
          value={address}
          onChange={(e) => setAddress(e.currentTarget.value)}
        />
        <input
          type='number'
          value={age}
          onChange={(e) => setAge(+e.currentTarget.value)}
        />
        <select onChange={(e) => setAddress(e.currentTarget.value)}>
          {CITIES.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>
    </>
  );
}
