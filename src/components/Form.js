import { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "increment-age": {
      return {
        name: state.name,
        age: state.age + 1,
      };
    }
    case "change-name":
      {
        return {
          name: action.nextName,
          age: state.age,
        };
      }
      throw Error("Unknown action: " + action.type);
  }
}

const initialState = { name: "Alireza", age: 36 };

function Form() {
  const [state, dispatch] = useReducer(reducer, initialState);

  function handleButtonClick() {
    dispatch({ type: "increment-age" });
  }

  function handleInputChange(e) {
    dispatch({
      type: "change-name",
      nextName: e.target.value,
    });
  }

  return (
    <>
      <input value={state.name} onChange={handleInputChange} />
      <button onClick={handleButtonClick}>Increment age</button>
      <p>
        Hello, My name is {state.name} and I have {state.age} years old
      </p>
    </>
  );
}

export default Form;
