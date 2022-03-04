import React, { FC, useState } from 'react';

export const Input: FC = () => {
  const [value, setValue] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <>
      <span>Hello, {value}</span>
      <input type="text" onChange={handleChange} />
    </>
  );
};
