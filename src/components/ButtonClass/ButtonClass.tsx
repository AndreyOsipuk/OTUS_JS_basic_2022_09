import React, { Component } from 'react';

interface ButtonClassState {
  name: string;
  value: number;
}

export class ButtonClass extends Component<
  Record<string, never>,
  ButtonClassState
> {
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

  componentDidUpdate() {
    console.log('update');
  }

  render() {
    return (
      <>
        {this.state.name}
        <br />
        <input type="text" onChange={this.handleChage} />
        <button onClick={this.handleClick}>click</button>
      </>
    );
  }
}
