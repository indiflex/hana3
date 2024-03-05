'use client';

import Link from 'next/link';
import { useReducer } from 'react';

// app/paralell/layout.tsx
export default function ParalellLayout({
  children,
  profile,
  login,
}: {
  children: React.ReactNode;
  profile: React.ReactNode;
  login: React.ReactNode;
}) {
  // const isLogin = false;
  const [isLogin, toggleLogin] = useReducer((pre) => !pre, true);
  return (
    <>
      <h1>
        ParalellLayout
        <button onClick={toggleLogin} className='float-end text-blue-500'>
          Toggle Login
        </button>
      </h1>
      {isLogin ? (
        <div className='border border-dotted border-red-500 flex justify-around p-5'>
          <div className='border p-3'>{profile}</div>
          <div className='border p-3'>{login}</div>
        </div>
      ) : (
        login
      )}

      {children}

      <div className='flex justify-around'>
        <Link href='/paralell/bbb'>Profile/BBB</Link>
        <Link href='/paralell/aaa'>Login/AAA</Link>
      </div>

      <div className='flex justify-around'>
        <Link href='/paralell/ccc'>Profile/CCC</Link>
        <Link href='/paralell/ddd'>Login/DDD</Link>
      </div>
      <Link href='/paralell/xxx'>XXX</Link>
    </>
  );
}
