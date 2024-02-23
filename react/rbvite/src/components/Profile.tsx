import { Ref, forwardRef } from 'react';
import { useSession } from '../contexts/session-context';

// type Props = {};

export const Profile = forwardRef((_, ref: Ref<HTMLButtonElement>) => {
  const {
    session: { loginUser },
    logout,
  } = useSession();
  return (
    <>
      <h3>
        #{loginUser?.id}: {loginUser?.name}
      </h3>
      <button ref={ref} onClick={logout}>
        Sign-out
      </button>
    </>
  );
});
// console.log('::>>', Profile, typeof Profile);
Profile.displayName = 'Profile';
