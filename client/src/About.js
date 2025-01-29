import React from "react";
import { NavLink } from "react-router-dom"; // Ensure react-router-dom is installed
import homeImage from "./assets/images.png";

const About = ({ handleLogout }) => {
  return (
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
              to="/Features"
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
      <div style={{ flex: 1 }}>
        {/* Page Header */}
        <header className="bg-primary text-white text-center py-5">
          <div className="container">
            <h1>About Us</h1>
            <p className="lead">Learn more about who we are and what we do.</p>
          </div>
        </header>

        {/* About Content */}
        <div className="container my-5">
          <div className="row">
            <div className="col-md-6">
              <h2>Our Mission</h2>
              <p>
                At MyApp, our mission is to empower individuals and businesses to
                achieve their goals with innovative tools and solutions. We
                prioritize simplicity, efficiency, and user satisfaction in
                everything we do.
              </p>
            </div>
            <div className="col-md-6">
              <img src={homeImage} alt="Home Illustration" className="img-fluid" />
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-md-6">
              <img src={homeImage} alt="Home Illustration" className="img-fluid" />
            </div>
            <div className="col-md-6">
              <h2>Our Team</h2>
              <p>
                We are a passionate team of developers, designers, and creators
                dedicated to building a platform that delivers value to our
                users. Collaboration and innovation drive everything we do.
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-primary text-white text-center py-3">
          <p className="mb-0">&copy; {new Date().getFullYear()} MyApp. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default About;
