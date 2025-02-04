import { Link } from "react-router-dom";
import "../css/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">Movie App</Link>
      </div>
      <div className="navbar links">
        <Link to="/favorites" className="nav-link">
          Favorites
        </Link>
        <Link to="/" className="nav-link">
          Home
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
