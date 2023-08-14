import { Link } from "react-router-dom"
import Footer from "../components/Footer"
import NavBar from "../components/NavBar"
import "./PageNotFound.css"
import pageNotFoundLogo from "/ConcertCraft-404-error-logo-transparent.png"
import { useEffect } from "react"

function PageNotFound() {

  useEffect(() => {
    document.title = '404 Page Not Found'
  }, [])

  return (
    <>
      <NavBar />
      <div className="error-logo-wrapper">
          <img src={pageNotFoundLogo} alt="page-not-found"  />
          <div className="msg-error-wrapper">
            <h4>Sorry! The page you are looking for go on a backstage tour and forget to come back.</h4>
            <div className="error-btn-wrapper">
              <h4>You can</h4>
              <Link to='/' className="error-nav-btn"><h4>Go Home</h4></Link>
              <h4>or</h4>
              <Link to='/schedule-booking' className="error-nav-btn"><h4>Go Concert Hunting !</h4></Link>
            </div>
          </div>
      </div>
      <Footer />
    </>
  )
}

export default PageNotFound
