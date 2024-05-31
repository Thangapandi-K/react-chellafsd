import { useContext } from "react";
import { NameContext } from "../App";
import { useEffect } from "react";

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

  export default D;