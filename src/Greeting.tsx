import React from 'react';

// props type: name must be a string
type GreetingProps = {
  name: string;
};

// function component typed with GreetingProps
const Greeting = ({ name }: GreetingProps) => {
  return <div>Hello, {name}!</div>;
};

export default Greeting;
