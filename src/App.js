import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Login from "./Login";
import FoodRecipeFinder from "./FoodRecipeFinder";
import Home from "./Home";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      children: [
        {
          path: "/recipe",
          element: <FoodRecipeFinder />,
        },
        {
          path: "/login",
          element: <Login />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;