import { useState } from "react";
import { Link } from "react-router-dom";
import { FaAnglesDown, FaUser } from "react-icons/fa6";
import logo from "../../images/logo.png"
import "./NavigationBar.css";

export default function NavigationBar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  function handleToggle() {
    setIsOpen(!isOpen);
  }

  function handleCloseMenu() {
    setIsOpen(false);
  }

  return (
    <header className="nav-header">
      <nav className="nav">
        <Link to="/" className="nav-brand" onClick={handleCloseMenu}>
          <img src={logo} alt="TravelMe logo" className="nav-logo" />
          <span className="nav-title">TravelMe</span>
        </Link>

        <button
          type="button"
          className={`nav-toggle ${isOpen ? "nav-toggle--open" : ""}`}
          onClick={handleToggle}
        >
          <FaAnglesDown />
        </button>

        <div className={`nav-right ${isOpen ? "nav-right--open" : ""}`}>
          <ul className="nav-links">
            <li>
              <Link to="/" onClick={handleCloseMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/destinations" onClick={handleCloseMenu}>
                Destinations
              </Link>
            </li>
            <li>
              <Link to="/planner" onClick={handleCloseMenu}>
                Planner
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={handleCloseMenu}>
                Contact
              </Link>
            </li>
          </ul>

          <Link to="/login" className="nav-login" onClick={handleCloseMenu}>
            <FaUser />
            <span>Login</span>
          </Link>
        </div>
      </nav>
    </header>
  );
}
