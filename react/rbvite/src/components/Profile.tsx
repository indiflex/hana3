import { Ref, forwardRef } from 'react';
import { LoginUser } from '../App';

type Props = {
  loginUser: LoginUser;
  logout: () => void;
};

export const Profile = forwardRef(
  ({ loginUser, logout }: Props, ref: Ref<HTMLButtonElement>) => {
    return (
      <>
        <h3>이름: {loginUser.name}</h3>
        <button ref={ref} onClick={logout}>
          Sign-out
        </button>
      </>
    );
  }
);
console.log('::>>', Profile, typeof Profile);
Profile.displayName = 'Profile';
