import { Button } from '@/components/ui/button';
import Link from 'next/link';

// import { redirect } from 'next/navigation';

export default function Hello() {
  // redirect('/hello/morning');

  return (
    <>
      <h1 className='text-lg'>Hello Page</h1>
      <Link href='/' scroll={false} type='button'>
        Go Home
      </Link>
      <Button variant='outline' size='lg'>
        BTN
      </Button>
    </>
  );
}
