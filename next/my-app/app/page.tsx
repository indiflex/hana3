import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <Link href='/todos'>Todo</Link>
      <Link href='/hello'>Hello</Link>
      <Link href='/hi'>Hi</Link>
      <Link href='/paralell'>Paralell</Link>
      <Link href='/intercept'>Intercept</Link>
      <Image
        src='/vercel.svg'
        alt='Vercel Logo'
        className='dark:invert'
        width={100}
        height={24}
        priority
      />
    </main>
  );
}
