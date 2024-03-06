'use client';

import Link from 'next/link';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { ReactNode } from 'react';

type Time = 'morning' | 'afternoon' | 'evening';
const TimeTo = {
  morning: 'afternoon',
  afternoon: 'evening',
  evening: 'morning',
};

export default function HelloLayout({ children }: { children: ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const time = pathname.replace(/\/hello\/(.*)$/, '$1');

  const searchParams = useSearchParams();
  const id = searchParams.get('id');
  console.log('🚀  id:', id);

  const setSearchParam = (query: string, value: string) => {
    const sparam = new URLSearchParams(searchParams.toString());
    sparam.set(query, value);
    router.push('/hello?' + sparam.toString());
  };

  const goHelloByTime = () => {
    console.log('pathname=', pathname, time);
    if (time in TimeTo) {
      const nextTime = TimeTo[time as Time];
      router.push(`/hello/${nextTime}`);
    } else {
      setSearchParam('id', id + 'x');
    }
  };

  return (
    <>
      <h1 className='text-lg'>
        Hello Layout
        <button onClick={goHelloByTime} className='float-end'>
          {time} -&gt;
        </button>
      </h1>

      <div>
        <ul className='flex justify-between text-blue-500'>
          <li>
            <Link href='/hello'>Hello</Link>
          </li>
          <li>
            <Link href='/hello/morning'>Morning</Link>
          </li>
          <li>
            <Link href='/hello/afternoon'>Afternoon</Link>
          </li>
          <li>
            <Link href='/hello/evening'>Evening</Link>
          </li>
        </ul>
      </div>
      <div className='border border-red-500 border-dotted'>{children}</div>
    </>
  );
}
