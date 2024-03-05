import Link from 'next/link';

export default function Page() {
  return (
    <>
      <h1>IC3 Page</h1>
      <div className='flex justify-around'>
        <Link href='/hello'>Hello</Link>
        <Link href='/intercept/ic2'>IC2</Link>
      </div>
    </>
  );
}
