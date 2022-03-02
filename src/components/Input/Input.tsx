import React, { FC } from 'react';

export const Input: FC = () => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };

  return <input type="text" onChange={handleChange} />;
};
