import App from "./App.tsx";
import { createHashRouter } from "react-router-dom"
import Solve from "./pages/solve/solve.tsx";
import AllProblems from "./pages/problemset/problemset.tsx";

export const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/problemset",
        element: <AllProblems />
      },
      {
        path: "/solve",
        element: <Solve />
      },
      {
        path: "/howto",
        element: <div>How to</div>
      },
      {
        path: "/about",
        element: <div>About</div>
      }
    ]
  }
]);