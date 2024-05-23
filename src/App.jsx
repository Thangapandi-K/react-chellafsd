const App = () => {

  const isLoggedIn = true;

  if (isLoggedIn) {
    return <h1>Welcome Back!</h1>
  } else {
    return <h1>Please Log In</h1>
  }
}

export default App