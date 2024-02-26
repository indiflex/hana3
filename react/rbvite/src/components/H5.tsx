import { Ref, forwardRef, useEffect, useId, useMemo, useState } from 'react';

const Child = ({ txt }: { txt: string }) => {
  const id = useId();
  return <li id={id}>{txt}</li>;
};

// {ss: 'FirstComponent' }
// function H5({ ss }: { ss: string }) {
export const H5 = forwardRef(
  ({ ss }: { ss: string }, ref: Ref<HTMLInputElement>) => {
    const [, rerender] = useState(0);
    const array = useMemo(() => [1, 2, 3], []);
    // const arr = array.map((a) => <Child txt={a.toString()} />);
    useEffect(() => {
      console.log('effect Array@@@');
    }, [array]);

    return (
      <div style={{ border: '1px solid skyblue', marginBottom: '0.5rem' }}>
        <h5>H55555566-{ss}</h5>
        <input type='text' ref={ref} placeholder='child-input...' />
        <ul>
          {array.map((item) => (
            <Child key={item} txt={item.toString()} />
          ))}
        </ul>
        <button
          onClick={() => rerender((prev) => prev + 1)}
          className='btn-danger'
        >
          rerender
        </button>
      </div>
    );
  }
);
H5.displayName = 'H5';
