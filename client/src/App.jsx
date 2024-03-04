import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Login } from "./pages/Login";
import { SignUp } from "./pages/SignUp";
import { Projects } from "./pages/Projects";
import { Dashboard } from "./pages/Dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/projects",
    element: <Projects />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },

  {
    path: "*",
    element: (
      <div className="h-screen w-full bg-stone-900 text-white flex justify-center items-center">
        {" "}
        <h1 className="text-[24px] font-bold">404 page not found</h1>{" "}
      </div>
    ),
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
