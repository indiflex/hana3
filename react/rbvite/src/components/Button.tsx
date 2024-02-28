import clsx from 'clsx';
import { PropsWithChildren } from 'react';

type Props = {
  type: 'primary' | 'danger' | 'default';
  onClick?: () => void;
};

export const Button = ({
  type = 'default',
  children,
  onClick = () => {},
}: PropsWithChildren<Props>) => {
  return (
    <button
      onClick={onClick}
      className={clsx(`btn-${type}`, 'inline-blockx', 'align-middlex')}
    >
      <span className='inline-block align-middle'>{children}</span>
    </button>
  );
};
