const App = () => {

  const isLoggedIn = false;
return (
  <div>
  {isLoggedIn && <h1>Welcome Back!</h1>} 
  {!isLoggedIn && <h1>Please Log In</h1>}
  </div>
)
}
export default App