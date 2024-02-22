import { useState } from 'react';

export const useToggle = (defaultFlag: boolean = false) => {
  const [flag, setFlag] = useState(defaultFlag);

  return [flag, () => setFlag(!flag)] as const;
};
