import React, { useState } from "react";

function CounterOne() {
  const [number, setNumber] = useState(0);

  const Increment = () => {
    setNumber(number + 1);
  };
  const Decrement = () => {
    setNumber(number - 1);
  };
  const Reset = () => {
    setNumber(0);
  };
  return (
    <div>
      <h2>useState</h2>
      <p>{number}</p>
      <button onClick={Increment}>Increment</button>
      <button onClick={Decrement}>decrement</button>
      <button onClick={Reset}>reset</button>
    </div>
  );
}

export default CounterOne;
