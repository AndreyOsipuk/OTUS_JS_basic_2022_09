import React from 'react';
import { Button } from './components/Button/Button';
import { Input } from './components/Input/Input';

interface ClassComponentProps {
  count: number;
}

interface ClassComponentState {
  count: number;
}

export class ClassComponent extends React.Component<
  ClassComponentProps,
  ClassComponentState
> {
  interval: NodeJS.Timer | null = null;
  myRef: React.RefObject<HTMLParagraphElement> = React.createRef();
  state = {
    count: 1,
  };

  componentDidMount() {
    console.log('mount component');
    // this.interval = setInterval(() => {
    //   console.log('interval');
    // }, 1000);
    // if (this.myRef.current) {
    //   this.myRef.current.addEventListener('click', () => {
    //     console.log('click');
    //   });
    // }

    this.setState((prevState) => ({ count: prevState.count + 1 }));
    this.setState((prevState) => ({ count: prevState.count + 2 }));
  }

  componentDidUpdate(
    props: ClassComponentProps,
    state: ClassComponentState,
    snapshot: any
  ) {
    console.log('child component update');
    console.log(this.state.count);
  }

  // componentWillUnmount() {
  //   console.log('component will unmount');
  //   // if (this.interval) {
  //   //   clearInterval(this.interval);
  //   // }
  // }

  // shouldComponentUpdate(
  //   nextProps: ClassComponentProps,
  //   prevState: ClassComponentState
  // ) {
  //   if (nextProps.count < 5) {
  //     return true;
  //   }
  //   return false;
  // }

  // static getDerivedStateFromProps(
  //   nextProps: ClassComponentProps,
  //   nextState: ClassComponentState
  // ) {
  //   if (nextProps.count < 5) {
  //     return { count: nextProps.count };
  //   }
  //   return null;
  // }

  // getSnapshotBeforeUpdate(
  //   prevProps: ClassComponentProps,
  //   prevState: ClassComponentState
  // ) {
  //   return { value: 1 };
  // }

  handleClick = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <>
        <h2>Child component</h2>
        <p ref={this.myRef}>{this.state.count}</p>
        <button onClick={this.handleClick}>click</button>
        {/* <Input />
        <Button /> */}
      </>
    );
  }
}
