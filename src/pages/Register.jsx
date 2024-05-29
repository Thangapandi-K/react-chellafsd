const Register = () => {
    return (
      <div>
        <h1>Register</h1>
        <form>
          <input type="text" placeholder="Name" /><br /><br />
          <input type="email" placeholder="Email" /><br /><br />
          <input type="password" placeholder="Password" /><br /><br />
          <button type="submit">Register</button><br /><br />
          Already have an account? <a href="/login">Login</a>
        </form>
      </div>
    )
  }
  
  export default Register;