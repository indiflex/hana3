'use client';

import Link from 'next/link';

// app/paralell/layout.tsx
export default function ParalellLayout({
  children,
  photoviewer,
}: {
  children: React.ReactNode;
  photoviewer: React.ReactNode;
}) {
  return (
    <>
      <h1>Photos</h1>
      {photoviewer}
      {children}

      <div className='flex justify-around'>
        <Link href='/photos/1'>Photos/1</Link>
        <Link href='/photos/2'>Photos/2</Link>
      </div>
    </>
  );
}
