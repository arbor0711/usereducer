import Form from "./components/Form";
import MultipleStates from "./components/MultipleStates";
import Login from "./components/Login";
import CounterOne from "./components/CounterOne";
import CounterTwo from "./components/CounterTwo";
import CounterThree from "./components/CounterThree";

function App() {
  return (
    <div>
      <CounterOne />
      <CounterTwo />
      <CounterThree />
      <br></br>
      <Form />
      <MultipleStates />
      <Login />
    </div>
  );
}

export default App;
