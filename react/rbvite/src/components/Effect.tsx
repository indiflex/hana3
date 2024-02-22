import { useEffect, useRef, useState } from 'react';

export default function Effect() {
  const [count, setCount] = useState(0);
  const [first, setFirst] = useState('');
  const [last] = useState('');
  // const [fullName, setFullName] = useState('');
  const fullName = `${first} ${last}`;
  const hRef = useRef<HTMLHeadingElement>(null);

  // useLayoutEffect(() => {
  //   setFullName(`${first} ${last}`);
  // }, [first, last]);

  useEffect(() => {
    if (!hRef.current) return;
    if (count > 20) return;

    const pos = hRef.current.getBoundingClientRect();
    console.log('🚀  pos:', count);
    hRef.current.style.top = `${pos.top + 0.1}px`;
    setCount((p) => p + 1);
  }, [count]);

  return (
    <div>
      <h1>{fullName}</h1>
      <input type='text' onChange={(e) => setFirst(e.currentTarget.value)} />
      <button onClick={() => setCount(count !== 0 ? 0 : 1)}>Show Effect</button>
      {count && (
        <h1 ref={hRef} style={{ position: 'absolute' }}>
          Article!
        </h1>
      )}
    </div>
  );
}
