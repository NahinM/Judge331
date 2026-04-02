import App from "./App.tsx";
import { createHashRouter } from "react-router-dom"

export const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/problemset",
        element: <div>Problem Set</div>
      },
      {
        path: "/submit",
        element: <div>Submit</div>
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