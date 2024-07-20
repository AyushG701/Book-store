import "./App.css";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
// const [count, setCount] = useState(0);

return (
<>
<Navbar />
<Outlet />
</>
);
}

export default App;

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import Home from "../home/Home";
import Shop from "../shop/Shop";
import About from "../components/About";
import Blog from "../components/Blog";
const router = createBrowserRouter([
{
path: "/",
element: <App />,
children: [
{
path: "/",
element: <Home />,
},
{
path: "/shop",
element: <Shop />,
},
{
path: "/about",
element: <About />,
},
{
path: "/blog",
element: <Blog />,
},
],
},
]);

export default router;
