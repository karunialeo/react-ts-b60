import { createBrowserRouter } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Login from "./Login";
import Register from "./Register";
import ProtectedRoute from "./ProtectedRoute";
import ProtectedRouteLayout from "./ProtectedRoute";
import Profile from "./Profile";

let router = createBrowserRouter([
  {
    Component: ProtectedRouteLayout,
    children: [
      {
        path: "/",
        Component: Home,
      },
      {
        path: "/profile",
        Component: Profile,
      },
    ],
  },
  {
    path: "/login",
    Component: Login,
  },
  {
    path: "/register",
    Component: Register,
  },
]);

export default router;
