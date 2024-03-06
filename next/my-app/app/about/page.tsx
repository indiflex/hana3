'use client';

import { Button } from '@/components/ui/button';
import { twMerge } from 'tailwind-merge';
import Link from 'next/link';
import { useState } from 'react';

export default function About() {
  const [name, setName] = useState('');

  return (
    <div>
      <span className={twMerge('px-3 py-1 bg-red-300 p-5')}>
        This is about page!
      </span>
      <div className='text-primary bg-warning'>{process.env.customKey}</div>
      <hr />
      <Link href='/csr'>CSR</Link>

      <span>Name: {name}</span>
      <Button onClick={() => setName('Hong')} variant='outline' size='md'>
        BTN1
      </Button>

      <Button disabled={!!name} variant='outline' size='md'>
        BTN2
      </Button>
    </div>
  );
}
