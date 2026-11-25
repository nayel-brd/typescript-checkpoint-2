import React, { Component } from 'react';

// this component takes no props
type CounterProps = {};

// state shape: count is a number
type CounterState = {
  count: number;
};

class Counter extends Component<CounterProps, CounterState> {
  // initial state, typed with CounterState
  state: CounterState = {
    count: 0,
  };

  // add 1 to count (arrow function keeps "this" bound to the class)
  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default Counter;
