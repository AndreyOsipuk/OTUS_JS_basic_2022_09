import React, { FC, useState } from 'react';
import { Button } from './components/Button';
import { ButtonClass } from './components/ButtonClass/ButtonClass';
import { Input } from './components/Input';

export const App: FC = () => {
  const [show, setShow] = useState(true);
  const [arr] = useState(['otus', 'react', 'forever']);

  const handleClick = (name: string) => {
    console.log(name);
  };

  const toggleShow = () => {
    setShow((prevShow) => !prevShow);
  };

  return (
    <>
      <h2>hello otus</h2>
      <button onClick={toggleShow}>{show ? 'close' : 'open'}</button>
      <hr />
      {show && (
        <>
          <ButtonClass />
          <br />
          <Button label="submit" onButtonClick={() => handleClick('submit')} />
          <br />
          <Button label="cancel" onButtonClick={() => handleClick('cancel')} />
          <br />
          <Input />
          <br />
        </>
      )}
      {arr.map((item, idx) => (
        <ButtonClass key={idx} />
      ))}
    </>
  );
};
