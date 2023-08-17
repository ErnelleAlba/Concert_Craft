import { useEffect } from "react"
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import "../components/HomePage/ConcertCard.css"

function ContactUs() {

  useEffect(() =>{
    document.title = "Contact Us | Concert Craft"
  }, [])

  return (
    <>
      <NavBar />
      <h1>Contact Us</h1>
      <div>
      <div className="contactCard col-md-4">
        <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />

          </div>
          <div className="contactCard col-md-8">
            <label htmlFor="exampleFormControlTextarea1" class="form-label">Message</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="6"></textarea><br />
            <div>
        <button type="button" class="btn btn-dark btn-lg btn-block col-md-4 text-light"><i class="fa-solid fa-message"></i> Submit</button>
        </div>
      </div>
        
      </div>
      <Footer />
    </>
  )
}

export default ContactUs
