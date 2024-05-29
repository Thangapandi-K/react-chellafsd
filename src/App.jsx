import { Link, NavLink, RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/",
        element: <div><Link to="./register">Register</Link> &nbsp;&nbsp; | &nbsp;&nbsp;<Link to="/login"> Log In</Link></div>
      },
      {
        path: "/register",
        element: <Register />
      },
      {
        path: "/login",
        element: <Login />
      }
    ]
  },
  
]);

const App = () => {
  return <RouterProvider router={router} />
}

export default App;