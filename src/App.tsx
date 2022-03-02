import React, { FC } from 'react';
import { Button } from './components/Button';
import { Input } from './components/Input';

export const App: FC = () => {
  const handleClick = (name: string) => {
    console.log(name);
  };

  return (
    <>
      <h2>hello otus</h2>
      <Button label="submit" onButtonClick={() => handleClick('submit')} />
      <Button label="cancel" onButtonClick={() => handleClick('cancel')} />
      <Input />
    </>
  );
};
