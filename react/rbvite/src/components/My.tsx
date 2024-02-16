import { Cart, Session } from '../App';
import { Login } from './Login';
import { Profile } from './Profile';

type Props = {
  session: Session;
  login: () => void;
  logout: () => void;
};

export const My = ({ session: { loginUser, cart }, login, logout }: Props) => {
  if (loginUser) loginUser.name = 'XXXXXXX';
  return (
    <div
      style={{ border: '2px solid red', marginBottom: '2rem', padding: '1rem' }}
    >
      {loginUser ? (
        <Profile loginUser={loginUser} logout={logout} />
      ) : (
        <Login login={login} />
      )}

      <ul>
        {cart.map(({ id, name, price }: Cart) => (
          <li key={id}>
            {name} ({price.toLocaleString()}원)
          </li>
        ))}
      </ul>
    </div>
  );
};
