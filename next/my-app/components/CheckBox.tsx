'use client';

import { useReducer } from 'react';

export default function CheckBox({
  checked,
  label,
}: {
  checked: boolean;
  label: string;
}) {
  const [isChecked, toggle] = useReducer((pre) => !pre, checked);
  const checkId = 'xxx';
  return (
    <>
      <input
        id={checkId}
        type='checkbox'
        checked={isChecked}
        onChange={toggle}
      />
      <label htmlFor={checkId}>{label}</label>
    </>
  );
}
