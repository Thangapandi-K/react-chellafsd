
// class component 

import { Component } from "react";
import Hello from "./components/Hello";

class App extends Component {
  // override the render method
  render() {
    //return JSX
    return (
      <div>
        <Hello />
      </div>
    )
  }
}

export default App;
