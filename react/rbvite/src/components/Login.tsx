export const Login = ({ login }: { login: () => void }) => {
  return (
    <>
      <form>
        <div>
          LoginID: <input type='text' />
        </div>
        <div>
          LoginName: <input type='text' />
        </div>
        <button onClick={login}>Sign-in</button>
      </form>
    </>
  );
};
