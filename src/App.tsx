import { Outlet, useNavigate, useLocation } from "react-router-dom"
import Nav from "./components/nav"

const navOptions = [
  {name: "problemset", href: "/problemset"},
  {name: "submit", href: "/submit"},
  {name:"howto",href:"/howto"},
  {name:"about",href:"/about"}
]

function App() {
  const navigate = useNavigate();
  const location = useLocation();

  if (location.pathname === "/") {
    navigate("/problemset");
  }

  return (
    <>
      <Nav options={navOptions} />
      <Outlet />
    </>
  )
}

export default App
