import { useState } from "react";
import { useRef } from "react";


const App = () => {

  const [state, setState] = useState(0);

  const countRef = useRef(0);

  const handleRefIncrement = () => {
    countRef.current += 1;
    console.log(countRef.current);
  }

  const handleStateIncrement = () => {
    setState(state + 1);
  }

  console.log("Component rendered")

  return (
    <>
    <h1>state Count : {state} </h1>
    <h1>Ref Count : {countRef.current} </h1>
    <button onClick={handleRefIncrement}>Ref Increment</button>
    <button onClick={handleStateIncrement}>State Increment</button>
    </>
  )
}

export default App;