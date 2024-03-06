import { Button } from '@/components/ui/button';
// import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
import { auth, signOut } from '@/lib/auth';

export default async function AuthTTPage() {
  const session = await auth();
  // const { data } = useSession();
  if (!session) return redirect('/api/auth/signin');

  return (
    <>
      <h1>{session.user?.email}</h1>
      <form
        action={async () => {
          'use server';
          await signOut();
        }}
      >
        <Button variant='outline'>SignOut</Button>
      </form>
    </>
  );
}
