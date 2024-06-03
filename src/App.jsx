import { useRef } from "react";

const App = () => {

  // create a reference using useRef hook
  const inputRef = useRef(null);
  const inputRef2 = useRef(null);


  const handleClick = () => {
      // focus the input element here
      //console.log(inputRef.current.value);
      inputRef2.current.focus();

  }

  return (
    <>
      <input 
        type="text"
        ref={inputRef} 
      />
      <button onClick={handleClick}>Focus Input</button>
    <br />    
    <input type="text" ref={inputRef2} />
    <button onClick={handleClick}>Focus Input 2</button>
    </>
  )
}

export default App;