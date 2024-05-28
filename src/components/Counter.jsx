import React from 'react'
import { useState } from 'react';

const Counter = ({ onCountChange }) => {
    
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
      setCount(count + 1);
      onCountChange(count + 1);
    }
    
  return (
    <div>
      <button onClick={handleIncrement}>Inc</button>
    </div>
  )
}

export default Counter