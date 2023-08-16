import "./Footer.css"
import logo from "/Concert-Craft-Logo-Transparent.png"

function Footer() {
  return (
    <>
      <footer>
        <div className="footer container-fluid mt-5 pt-4 pb-3 d-flex flex-wrap justify-content-center ">
          <div className="social-icons me-0 my-auto me-lg-5 me-md-5">
            <h3 className="follow-us-header text-light d-flex justify-content-center text-uppercase pb-2">Follow Us</h3>
            <ul className="wrapper-icons list-unstyled d-flex flex-row justify-content-center" style={{columnGap: "30px"}}>          
              <li>
                <a 
                  href="https://www.instagram.com/" 
                  className="icon icon-instagram" 
                  target="_blank">
                    <i 
                      className="fa-brands fa-instagram fa-lg" 
                      style={{color: "#ffffff"}}>
                    </i>
                </a>
              </li>
              <li>
                <a 
                  href="https://www.facebook.com/" 
                  className="icon icon-facebook" 
                  target="_blank">
                    <i 
                      className="fa-brands fa-facebook-f fa-lg" 
                      style={{color: "#ffffff"}}>
                    </i>
                </a>
              </li>
              <li>
                <a 
                  href="https://twitter.com/"
                  className="icon icon-twitter" 
                  target="_blank">
                    <i 
                      className="fa-brands fa-twitter fa-lg" 
                      style={{color: "#ffffff"}}>
                    </i>
                </a>
              </li>
              <li>
                <a 
                  href="https://www.tiktok.com/" 
                  className="icon icon-tiktok" 
                  target="_blank">
                    <i 
                      className="fa-brands fa-tiktok fa-lg" 
                      style={{color: "#ffffff"}}>
                    </i>
                </a>
            </li>
            </ul>
          </div>
          <img 
            src={logo} 
            alt="Concert-Craft-Logo" 
            className="footer-logo my-auto ms-0 ms-lg-5 ms-md-5" />
        </div>
        <p className="mb-0 d-flex justify-content-center" id="footer-copyright">
            &copy; 2023 Concert Craft 
            <span className="mx-1 mx-lg-4 mx-md-4">|</span> 
            Created by Group 01
        </p>
      </footer>
    </>
  )
}

export default Footer
