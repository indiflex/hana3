import { useReducer } from 'react';

export const useToggle = (defaultFlag: boolean = false) => {
  // const [flag, setFlag] = useState(defaultFlag);
  // const makeToggle = () => {
  //   setFlag((flag) => !flag);
  // };
  const [flag, makeToggle] = useReducer((pre) => !pre, defaultFlag);

  return [flag, makeToggle] as const;
};
