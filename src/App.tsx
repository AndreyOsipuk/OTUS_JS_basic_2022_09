import React, { FC, useState } from 'react';
import { ClassComponent } from './components/ClassComponent';
import { MemoComponent } from './components/FuncComponent/FuncComponent';

export const App: FC = () => {
  const [show, setShow] = useState(true);
  const [count, setCount] = useState(1);

  const toggleShow = () => {
    setShow((prevShow) => !prevShow);
  };

  return (
    <>
      <h2>Parect component</h2>
      <button onClick={toggleShow}>{show ? 'close' : 'open'}</button>
      <br />
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>click</button>
      <hr />
      <MemoComponent count={count} />
      {/* <ClassComponent count={count} /> */}
    </>
  );
};
