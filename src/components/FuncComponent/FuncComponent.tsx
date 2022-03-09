import React, {
  FC,
  useEffect,
  useState,
  useRef,
  useCallback,
  useMemo,
} from 'react';
import { Button } from './components/Button';
import { Input } from './components/Input';

interface FuncComponentProps {
  count: number;
}

export const FuncComponent: FC<FuncComponentProps> = (props) => {
  let interval: NodeJS.Timer;
  const [count, setCount] = useState(1);
  const [name, setName] = useState('');
  const funcRef = useRef(null);
  console.log('render func component');
  useEffect(() => {
    // interval = setInterval(() => {
    //   console.log(1);
    // }, 1000);
    // return () => {
    //   if (interval) {
    //     clearInterval(interval);
    //   }
    // };
    console.log('ref', funcRef);
  }, []); // componentDidMount, componentWillUnmount

  useEffect(() => {
    console.log('update count or name');
  }, [count]); //componentDidUpdate

  const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleFilter = () => {
    // 1000
  };

  // const memoizedCallback = useCallback(() => {
  //   // doSomething(a, b);
  // }, [a, b]);

  // const memoizedValue = useMemo(() => {
  //   return computeExpensiveValue(a, b);
  // }, [a, b]);

  return (
    <>
      {count}
      <button ref={funcRef} onClick={() => setCount(count + 1)}>
        click
      </button>
      <input type="text" onChange={handleChangeName} value={name} />
      {/* <Input />
      <Button /> */}
    </>
  );
};

const MemoComponent = React.memo(FuncComponent);
export { MemoComponent };
