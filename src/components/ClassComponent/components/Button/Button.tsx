import React, { Component } from 'react';

interface ButtonState {
  name: string;
  value: number;
}

export class Button extends Component<{}, ButtonState> {
  state = {
    name: 'react',
    value: 0,
  };

  handleChage = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ name: e.target.value });
  };

  handleClick = () => {
    this.setState({ value: 1 });
    // this.setState({ value: 2 });
  };

  // componentDidUpdate() {
  //   console.log('update');
  // }

  render() {
    return (
      <>
        <button onClick={this.handleClick}>click</button>
      </>
    );
  }
}
