

const Bin = ( {user} ) =>{
  return(
    <div>
      <p>Logged In User: { user }</p>
    </div>
  )
}

const App = () => {

  const loggedInUser = "John Doe";

  return(
    <div>
      <h1>Data from App to Bin</h1>
      <Bin 
        user={loggedInUser}
      />
    </div>
  )
}

export default App;