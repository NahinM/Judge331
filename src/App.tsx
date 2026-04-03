import { Outlet, useNavigate, useLocation } from "react-router-dom"
import Nav from "./components/nav"

const navOptions = [
  {name: "problemset", href: "/problemset"},
  {name: "solve", href: "/solve"},
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
    <div className="bg-gray-200 h-screen w-full m-0 p-0 overflow-y-auto">
      <Nav options={navOptions} />
      <Outlet />
    </div>
  )
}

export default App
