import React, { useReducer } from "react";

const initialValue = { firstCounter: 0 };

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { firstCounter: state.firstCounter + action.value };
    case "DECREMENT":
      return { firstCounter: state.firstCounter - action.value };
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
      <button onClick={() => dispatch({ type: "INCREMENT", value: 1 })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: "DECREMENT", value: 1 })}>
        decrement
      </button>
      <button onClick={() => dispatch({ type: "INCREMENT", value: 5 })}>
        Increment 5
      </button>
      <button onClick={() => dispatch({ type: "DECREMENT", value: 5 })}>
        decrement 5
      </button>
      <button onClick={() => dispatch({ type: "RESET" })}>reset</button>
    </div>
  );
}

export default CounterThree;
