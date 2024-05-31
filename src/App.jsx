import { useContext } from "react";
import { useEffect } from "react";
import { createContext } from "react"
import { useState } from "react"

// 1. create a context to store the name
const NameContext = createContext();

const D = () => {

  // 3. use the context in the component

  const { name, setName } = useContext(NameContext);

  useEffect(() => {
    setTimeout(() => {
      setName('Jane')
    }, 5000);
  })

  return <h1>Hello, {name}!</h1>
}

const C = () => {
  return <D />
}

const B = () => {
  return <C />
}


// 2. wrap the component tree with the context provider
const App = () => {
  
  const [name, setName] = useState('John')

  return (
    <NameContext.Provider value={{name, setName}}>
      <B />
    </NameContext.Provider>
  )
}

export default App;