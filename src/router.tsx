import App from "./App.tsx";
import { createHashRouter } from "react-router-dom"
import Solve from "./pages/solve/solve.tsx";
import AllProblems from "./pages/problemset/problemset.tsx";
import HowTo from "./pages/howto/how-to.tsx";
import About from "./pages/about/about.tsx";

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
        element: <HowTo />
      },
      {
        path: "/about",
        element: <About />
      }
    ]
  }
]);