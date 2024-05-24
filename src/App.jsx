
// // Functional component with arrow function 

// const App = () => {
//   return (
//     <div>
//       <h1>My React App</h1>
//     </div>
//   )
// }

// export default App;

// Functional component with function 

// function App() {
//   return (
//     <div>
//       <h1>My React App</h1>
//     </div>
//   )
// }

// export default App;


// class component 

import { Component } from "react";

class App extends Component {
  // override the render method
  render() {
    //return JSX
    return (
      <div>
        <h1>My React App</h1>
      </div>
    )
  }
}

export default App;
