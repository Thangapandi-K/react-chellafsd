import { useContext } from "react";
import { useEffect } from "react";
import { createContext } from "react"
import { useState } from "react"
import B from "./component/B";

// 1. create a context to store the name
const NameContext = createContext();


// 2. wrap the component tree with the context provider
const App = () => {
  
  const [name, setName] = useState('John')

  return (
    <NameContext.Provider value={{name, setName}}>
      <B />
    </NameContext.Provider>
  )
}

export {App as default, NameContext};