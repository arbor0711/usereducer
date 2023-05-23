import React, { useReducer } from "react";

const initialValue = { firstCounter: 0 };

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { firstCounter: state.firstCounter + 1 };
    case "DECREMENT":
      return { firstCounter: state.firstCounter - 1 };
    case "RESET":
      return initialValue;
    default:
      return state;
  }
};
function CounterThree() {
  const [count, dispatch] = useReducer(reducer, initialValue);

  return (
    <div>
      <h2>useReducer object</h2>
      <p>{count.firstCounter}</p>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>decrement</button>
      <button onClick={() => dispatch({ type: "RESET" })}>reset</button>
    </div>
  );
}

export default CounterThree;
