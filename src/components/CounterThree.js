import React, { useReducer } from "react";

const initialValue = {
  firstCounter: 0,
  secondCounter: 10,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, firstCounter: state.firstCounter + action.value };
    case "DECREMENT":
      return { ...state, firstCounter: state.firstCounter - action.value };
    case "INCREMENT2":
      return { ...state, secondCounter: state.secondCounter + action.value };
    case "DECREMENT2":
      return { ...state, secondCounter: state.secondCounter - action.value };
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
      <p>{count.secondCounter}</p>
      <div>
        <button onClick={() => dispatch({ type: "INCREMENT", value: 1 })}>
          Increment first number
        </button>
        <button onClick={() => dispatch({ type: "DECREMENT", value: 1 })}>
          decrement first number
        </button>
        <button onClick={() => dispatch({ type: "INCREMENT", value: 5 })}>
          Increment 5 first number
        </button>
        <button onClick={() => dispatch({ type: "DECREMENT", value: 5 })}>
          decrement 5 first number
        </button>
      </div>
      <div>
        <button onClick={() => dispatch({ type: "INCREMENT2", value: 1 })}>
          Increment second number
        </button>
        <button onClick={() => dispatch({ type: "DECREMENT2", value: 1 })}>
          decrement second number
        </button>
      </div>
      <button onClick={() => dispatch({ type: "RESET" })}>reset</button>
    </div>
  );
}

export default CounterThree;
