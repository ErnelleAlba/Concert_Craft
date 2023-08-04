import { Link, NavLink } from "react-router-dom"
import LoginModal from "./Modal/LoginModal"
import "./NavBar.css"
import logo from "../images/Concert-Craft-Logo-Transparent.png"

function NavBar() {
  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg bg-light pt-0">
          <div className="container-fluid p-0">
            <div className="navbar-brand me-0">
              <Link to="./" className="logo">
                  <img src={logo} alt="Concert-Craft-Logo" />
              </Link> 
            </div>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span><i className="fa-solid fa-bars" style={{color: "#ffffff"}}></i></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <NavLink className="nav-link" to="/">Home</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/meal-gallery">Concerts</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/contact-us">Contact Us</NavLink>
                </li>
                <li className="nav-item">
                  <a className="nav-link" data-bs-toggle="modal" data-bs-target="#loginModal">
                    Login
                  </a>
                  <LoginModal/>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  )
}

export default NavBar
