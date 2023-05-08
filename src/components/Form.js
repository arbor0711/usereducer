import { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "increment-age": {
      return {
        name: state.name,
        age: state.age + 1,
      };
    }
    case "decrement-age": {
      return {
        name: state.name,
        age: state.age - 1,
      };
    }
    case "change-name": {
      return {
        name: action.nextName,
        age: state.age,
      };
    }
    case "change-age":
      {
        return {
          age: action.nextAge,
          name: state.name,
        };
      }
      throw Error("Unknown action: " + action.type);
  }
}

const initialState = { name: "Alireza", age: 36 };

function Form() {
  const [state, dispatch] = useReducer(reducer, initialState);

  function incrementButton() {
    dispatch({ type: "increment-age" });
  }
  function DecrementButton() {
    dispatch({ type: "decrement-age" });
  }

  function ageInputChange(e) {
    dispatch({
      type: "change-age",
      nextAge: e.target.value,
    });
  }

  function nameInputChange(e) {
    dispatch({
      type: "change-name",
      nextName: e.target.value,
    });
  }

  return (
    <>
      <input value={state.name} onChange={nameInputChange} />
      <br />
      <button onClick={incrementButton}>Increment age</button>
      <input
        value={state.age}
        style={{ maxWidth: "50px" }}
        onChange={ageInputChange}
      />
      <button onClick={DecrementButton}>Decrement age</button>
      <p>
        Hello, My name is {state.name} and I have {state.age} years old
      </p>
    </>
  );
}

export default Form;
