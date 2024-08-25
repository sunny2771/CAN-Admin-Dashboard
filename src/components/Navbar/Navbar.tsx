import { useLocation } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
    const location = useLocation();
    const currentPath = location.pathname;    

  return (
    <div>
      <header className="navbar">
        {currentPath === '/' ?
        <div className="left">
          <span>Dashboard</span>
          <span>Opportunity analysis</span>
        </div> : <div></div> }
        <div className="right">
          <div className="userDetails">
            <span>Welcome</span>
            <span>John Smith</span>
          </div>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRptn7UuufTCvIuiVqNXg_T3WksT4pwIZm4vQ&s"
            alt="logo"
          />
        </div>
      </header>
    </div>
  );
};

export default Navbar;
