import { NavLink, useLocation } from "react-router-dom";
import cameraIcon from "../assets/camera.svg";

export default function Navbar() {
  const location = useLocation();

  // Map pathnames to human-readable labels
  const pageNames = {
    "/": "Home",
    "/portfolio": "Portfolio",
  };

  return (
    <nav
      className="navbar sticky-top navbar-expand-lg bg-dark"
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <span className="navbar-brand mb-0 h1">
          Will Photography{" "}
          <img src={cameraIcon} style={{ filter: "invert(1)" }}></img>
        </span>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/portfolio"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                Porfolio
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
