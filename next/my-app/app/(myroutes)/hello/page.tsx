// localhost:3000/hello ==> localhost:3000/docs/hello
// a.com/hello
import Link from 'next/link';

export default function Hello() {
  return (
    <>
      <h1 className='text-lg'>Hello Page</h1>
      <Link href='/'>Go Home</Link>
    </>
  );
}
