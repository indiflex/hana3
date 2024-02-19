import { Cart, Session } from '../App';
import { Login } from './Login';
import { Profile } from './Profile';

type Props = {
  session: Session;
  login: (id: number, name: string) => void;
  logout: () => void;
  removeItem: (itemId: number) => void;
};

export const My = ({
  session: { loginUser, cart },
  login,
  logout,
  removeItem,
}: Props) => {
  // if (loginUser) loginUser.name = 'XXXXXXX';
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
            <small>{id}.</small>
            {name} ({price.toLocaleString()}원)
            <button onClick={() => removeItem(id)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
