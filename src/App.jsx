import { Link, NavLink, RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Note from "./pages/Note";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/notes/:id",
    element: <Note />
  }
]);


const App = () => {
  return <RouterProvider router={router} />
}

export default App;