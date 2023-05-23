import React, { useReducer } from "react";

const reducer = (state, action) => {
  switch (action) {
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

  return (
    <div>
      <h2>useReducer</h2>
      <p>{state}</p>
      <button
        onClick={() => {
          dispatch("INCREMENT");
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          dispatch("DECREMENT");
        }}
      >
        Decrement`
      </button>
      <button
        onClick={() => {
          dispatch("RESET");
        }}
      >
        Reset
      </button>
    </div>
  );
}

export default CounterTwo;
