import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

const App = () => {

  let [count, setCount] = useState(0);

  //runs only once when the component is mounted

  useEffect(() => {
    console.log('component mounted');
  }, []);

  const handleIncrement = () => {
    setCount(count + 1);
  }

  const handleDecrement = () => {
    if (count != 0)
    setCount(count - 1);
  }

  const handleReset = () => {
    setCount(0);
  }

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  )
}

export default App