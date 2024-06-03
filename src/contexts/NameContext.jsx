import { createContext, useContext, useState } from "react";

// 1. create a context to store the name
const NameContext = createContext();

// 2. create a provider
export const NameProvider = ({ children }) => {
    const [name, setName] = useState('John');

    return (
        <NameContext.Provider value={{name, setName}}>
          {children}
        </NameContext.Provider>
      )
}

export const useName = () => useContext(NameContext);
