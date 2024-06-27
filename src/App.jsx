import { useDispatch } from "react-redux";
import "./App.css";
import Count from "./components/Count";

function App() {
  const dispatch = useDispatch();
  return (
    <>
      <button onClick={() => dispatch({ type: "INCREAMENT" })}>
        Increment
      </button>
      <Count />
      <button onClick={() => dispatch({ type: "DECREAMENT" })}>
        Decrement
      </button>
    </>
  );
}

export default App;
