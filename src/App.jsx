import { useState } from "react";
import { useRef } from "react";

const App = () => {

  const [state, setState] = useState(0);

  // create a reference using useRef hook
  const inputRef = useRef(null);



  const handleClick = () => {
      // focus the input element here
      //console.log(inputRef.current.value);
      inputRef.current.focus();
      
     

  }

  const handleChange = () => {

    inputRef.current.value = "Hello World !"
    setState(state +1);
  }

  console.log("rendering");

  return (
    <>
      <input 
        type="text"
        ref={inputRef} 
      />
      <button onClick={handleClick}>Focus Input</button>
      <button onClick={handleChange}>Change Value</button>
    </>
  )
}

export default App;