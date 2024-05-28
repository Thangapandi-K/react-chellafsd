import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

const App = () => {

  let [count, setCount] = useState(0);
  let [increment, setIncrement] = useState(0);

  //runs when the component is mounted and count is updated
  useEffect(() => {
    console.log('component mounted');
    console.log('Count', count);
    console.log('Increment', increment);
  }, [count]);

  const handleIncrement = () => {
    setCount(count + 1);
    setIncrement(increment + 1);
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