import { LoginUser } from '../App';

type Props = {
  loginUser: LoginUser;
  logout: () => void;
};

export const Profile = ({ loginUser, logout }: Props) => {
  return (
    <>
      <h3>이름: {loginUser.name}</h3>
      <button onClick={logout}>Sign-out</button>
    </>
  );
};
