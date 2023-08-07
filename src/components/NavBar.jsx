import { Link, NavLink } from "react-router-dom"
import LoginModal from "./Modal/LoginModal"
import "./NavBar.css"
import logo from "/Concert-Craft-Logo-Transparent.png"

function NavBar() {
  return (
    <>
      <header>
        <nav className="navbar navbar-expand-md bg-light pt-0 mb-5">
          <div className="container-fluid p-0">
            <div className="navbar-brand me-0">
              <Link to="./" className="logo">
                  <img src={logo} alt="Concert-Craft-Logo" />
              </Link> 
            </div>
            <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
              <span><i className="fa-solid fa-bars fa-lg" style={{color: "#ffffff"}}></i></span>
            </button>
            <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
              <div className="offcanvas-header">
                <img src={logo} alt="Concert-Craft-Logo" />
                <h1 className="offcanvas-title" id="offcanvasNavbarLabel">Menu</h1>
                <button type="button" className="close-btn" data-bs-dismiss="offcanvas" aria-label="Close">
                  <span><i className="fa-solid fa-xmark fa-2xl"></i></span>
                </button>
              </div>
              <div className="offcanvas-body">
                <ul className="navbar-nav">
                  <li className="nav-item" data-bs-dismiss="offcanvas">
                    <NavLink className="nav-link" to="/">Home</NavLink>
                  </li>
                  <li className="nav-item" data-bs-dismiss="offcanvas">
                    <NavLink className="nav-link" to="/schedule-booking">Schedules</NavLink>
                  </li>
                  <li className="nav-item" data-bs-dismiss="offcanvas">
                    <NavLink className="nav-link" to="/contact-us">Contact Us</NavLink>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" data-bs-toggle="modal" data-bs-target="#loginModal" id="login-btn">
                      Login
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <LoginModal/>
          </div>
        </nav>
      </header>
    </>
  )
}

export default NavBar
