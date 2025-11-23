import "./NavigationBar.css";
import logo_img from "../../images/logo.png";
import { Link } from "react-router-dom";

export default function NavigationBar() {
  return (
    <nav>
      <img className="nav-logo" src={logo_img} alt="logo-img" />
      <p className="nav-title">TravelMe</p>
      <div className="nav-links">
        <p className="nav-link"><Link to="/">Home</Link></p>
        <p className="nav-link"><Link to="/about">About</Link></p>
        <p className="nav-link"><Link to="/about">About</Link></p>
        <p className="nav-link"><Link to="/about">About</Link></p>
      </div>
    </nav>
  );
}
