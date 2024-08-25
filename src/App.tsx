import "./styles/global.scss";
import Menu from './components/Menu/Menu';
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import AssignedToMe from "./pages/AssignedToMe/AssignedToMe";
import Opportunity from "./pages/Opportunities/Opportunities";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const Layout = () => {
    return (
      <div className="main">
        <div className="container">
          <div className="menuContainer">
            <Menu />
          </div>
          <div className="contentContainer">
            <Navbar />
            <Outlet />
          </div>
        </div>
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Dashboard />,
        },
        {
          path: "/assignedtome",
          element: <AssignedToMe />,
        },
        {
          path: "/opportunity",
          element: <Opportunity />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
