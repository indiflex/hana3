/* eslint-disable react-refresh/only-export-components */

import {
  PropsWithChildren,
  createContext,
  useContext,
  useReducer,
} from 'react';

type CounterContextProp = {
  count: number;
  plusCount: () => void;
  minusCount: (payload?: number) => void;
};

type ReducerAction = {
  type: string; // 'plus' | 'minus'
  payload?: number;
};

enum ACTION {
  PLUS = 'plus',
  MINUS = 'minus',
}

const CounterContext = createContext<CounterContextProp>({
  count: 0,
  plusCount: () => {},
  minusCount: () => {},
});

const reducer = (count: number, { type, payload = 1 }: ReducerAction) => {
  switch (type) {
    case ACTION.PLUS:
      return count + payload;
    case 'minus':
      return count - payload;
    default:
      return count;
  }
};

export const CounterProvider = ({ children }: PropsWithChildren) => {
  const [count, dispatch] = useReducer(reducer, 0);

  const plusCount = () => dispatch({ type: ACTION.PLUS });
  const minusCount = (payload: number = 1) =>
    dispatch({ type: ACTION.MINUS, payload });

  // const [count, setCount] = useState(0);
  // const plusCount = () => setCount((pre) => pre + 1); // &100 => &200
  // const plusCount = useCallback(
  //   () => setCount((prevCount) => prevCount + 1),
  //   []
  // );
  // const minusCount = useCallback(
  //   () => setCount((prevCount) => prevCount - 1),
  //   []
  // );

  return (
    <CounterContext.Provider
      value={{
        count,
        plusCount,
        minusCount,
      }}
    >
      {children}
    </CounterContext.Provider>
  );
};

export const useCounter = () => useContext(CounterContext);
