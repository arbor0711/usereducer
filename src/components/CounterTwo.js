import React, { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    case "RESET":
      //   state = 0;
      return initialValue;
    default:
      break;
  }
};

const initialValue = 0;

function CounterTwo() {
  const [state, dispatch] = useReducer(reducer, initialValue);
  const Increment = () => {
    dispatch({ type: "INCREMENT" });
  };
  const Decrement = () => {
    dispatch({ type: "DECREMENT" });
  };
  const Reset = () => {
    dispatch({ type: "RESET" });
  };

  return (
    <div>
      <h2>useReducer</h2>
      <p>{state}</p>
      <button onClick={Increment}>Increment</button>
      <button onClick={Decrement}>Decrement`</button>
      <button onClick={Reset}>Reset</button>
    </div>
  );
}

export default CounterTwo;
