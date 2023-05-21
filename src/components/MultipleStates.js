import { useReducer } from "react";

const reducer = (prevState, action) => {
  let array;
  switch (action.type) {
    case "ADD":
      array = [...prevState];
      array.push(action.payload);
      return array;
    case "REMOVE":
      array = [...prevState];
      array.pop();
      return array;
    case "CLEAR":
      return (prevState = []);
    default:
      break;
  }
};

const MultipleStates = (props) => {
  const [state, dispatch] = useReducer(reducer, ["initial value"]);
  console.log(state);

  const addHandler = () => {
    dispatch({ type: "ADD", payload: Math.round(Math.random() * 100 + 100) });
  };

  const removeHandler = () => {
    dispatch({ type: "REMOVE" });
  };

  const clearHandler = () => {
    dispatch({ type: "CLEAR" });
  };

  return (
    <>
      <hr />
      <h2>useReducer use case</h2>
      <h3>Manage multiple state: modify an array</h3>
      <button onClick={addHandler}>Add random value to array</button>
      <button onClick={removeHandler}>Remove last value from array</button>
      <button onClick={clearHandler}>Clear array</button>
      <p>Shopping cart array:</p>
      <p>
        <b>
          {state.length === 0 && "(empty)"}
          {state.join("-")}
        </b>
      </p>
    </>
  );
};

export default MultipleStates;
