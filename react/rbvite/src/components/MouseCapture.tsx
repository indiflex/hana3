import { useLayoutEffect, useState } from 'react';

type Position = { x: number; y: number };

export default function MouseCapture() {
  const [position, setPosition] = useState<Position>({
    x: 0,
    y: 0,
  });

  const catchPosition = ({ x, y }: Position) => {
    setPosition({ x, y });
  };

  useLayoutEffect(() => {
    window.addEventListener('mousemove', catchPosition);

    return () => window.removeEventListener('mousemove', catchPosition);
  });

  return (
    <>
      <small>{JSON.stringify(position)}</small>
    </>
  );
}
