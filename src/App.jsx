
// class component 

import { Component } from "react";

class Hello extends Component {
  render() {
    return (
      <div>
        <h1>Hello World!</h1>
      </div>
    )
  }
}

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
