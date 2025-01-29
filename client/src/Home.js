import React from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import homeImage from './assets/images.png';


const Home = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear session storage, local storage, or authentication token
    localStorage.removeItem("authToken"); // Example: Remove token
    alert("You have been logged out successfully.");
    navigate("/login"); // Redirect to login page
  };

  return (
    <div>
      {/* Main Layout */}
      <div className="d-flex">
        {/* Sidebar */}
        <nav
          className="d-flex flex-column bg-light border-end vh-100 p-3"
          style={{ width: "250px" }}
        >
          <h4 className="text-primary">MyApp</h4>
          <ul className="nav flex-column">
            <li className="nav-item">
              <NavLink
                to="/Home"
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : ""}`
                }
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/About"
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : ""}`
                }
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/Contact"
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : ""}`
                }
              >
                Contact
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/features"
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : ""}`
                }
              >
                Features
              </NavLink>
            </li>
            <li className="nav-item">
              <button
                className="btn btn-outline-danger mt-3"
                onClick={handleLogout}
              >
                Logout
              </button>
            </li>
          </ul>
        </nav>

        {/* Main Content */}
        <div className="col-md-9 col-lg-10">
          <div className="container mt-5">
            <div className="row align-items-center">
              <div className="col-md-6">
                <h1>Welcome to MyApp</h1>
                <p className="lead">
                  MyApp is a modern platform for managing your tasks, connecting
                  with others, and boosting productivity. Explore now!
                </p>
                <a href="/features" className="btn btn-primary">
                  Explore Features
                </a>
              </div>
              <div className="col-md-6">
              <img src={homeImage} alt="Home Illustration" className="img-fluid" />
              </div>
            </div>
          </div>

          {/* Outlet to Render Routes */}
          <div className="container mt-4">
            <Outlet  />
          </div>

          {/* Footer */}
          <footer className="bg-primary text-white text-center py-3 mt-5">
            <p className="mb-0">
              &copy; {new Date().getFullYear()} MyApp. All rights reserved.
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Home;
