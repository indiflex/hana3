import Link from 'next/link';
import { ReactNode } from 'react';

const TIMES = ['morning', 'afternoon', 'evening'];
export default function HiLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <h1>Hi~</h1>
      <ul className='grid grid-cols-3 text-blue-500'>
        {TIMES.map((time) => (
          <li key={time}>
            <Link href={`/hi/${time}`}>{time}</Link>
          </li>
        ))}
      </ul>
      <div className='border border-dotted border-red-700'>{children}</div>
    </>
  );
}
