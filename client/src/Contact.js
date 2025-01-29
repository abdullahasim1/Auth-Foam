import React from "react";
import { NavLink } from "react-router-dom"; // Ensure react-router-dom is installed

const Contact = ({ handleLogout }) => {
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
      <div style={{ flex: 1 }}>
        {/* Page Header */}
        <header className="bg-primary text-white text-center py-5">
          <div className="container">
            <h1>Contact Us</h1>
            <p className="lead">We'd love to hear from you! Get in touch with us.</p>
          </div>
        </header>

        {/* Contact Form */}
        <div className="container my-5">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <form>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Your email"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">
                    Message
                  </label>
                  <textarea
                    className="form-control"
                    id="message"
                    rows="5"
                    placeholder="Your message"
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary w-100">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-primary text-white text-center py-3">
          <p className="mb-0">
            &copy; {new Date().getFullYear()} MyApp. All rights reserved.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Contact;
