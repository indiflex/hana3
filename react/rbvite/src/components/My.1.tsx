import { Props } from './My';

export const My = ({ session: { loginUser }, login, logout }: Props) => {
  return (
    <>{loginUser ? <Profile logout={logout} /> : <Login login={login} />}</>
  );
};
