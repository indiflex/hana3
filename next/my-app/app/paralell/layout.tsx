import Link from 'next/link';

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
  return (
    <>
      <h1>ParalellLayout</h1>
      <div className='border border-dotted border-red-500 flex justify-around p-5'>
        <div className='border p-3'>{profile}</div>
        <div className='border p-3'>{login}</div>
      </div>
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
