import Hello from "./components/Hello";

const App = () => {

  const name = 'Chella';

  return (
    <div>
      <Hello 
        name={name}
      />
    </div>
  )
}

export default App;