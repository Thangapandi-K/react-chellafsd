import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Note from "./pages/Note";
import { loader as notesLoader } from "./pages/Home";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    loader: notesLoader
  },
  {
    path: "/notes/:id",
    element: <Note />,
    loader: notesLoader
  }
]);

const App = () => {
  return <RouterProvider router={router} />
}

export default App;