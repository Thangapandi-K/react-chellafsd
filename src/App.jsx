import React, { Component } from 'react'

export class App extends Component {

constructor(props) {
  super(props); 
    this.state = {
      count: 0
    }
}

componentDidMount() {
  console.log('component did mount');
}

componentDidUpdate() {
  console.log('component did update');
}

componentWillUnmount() {
  console.log('component will unmount');
}

handleIncrement = () => {
  this.setState({
    count: this.state.count + 1
  })
}

  render() {
    return (
      <div>
        <h1>Counter: {this.state.count}</h1>
        <button onClick={this.handleIncrement}>Increment</button>
      </div>
    )
  }
}

export default App