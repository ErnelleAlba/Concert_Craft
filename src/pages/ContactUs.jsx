import { useEffect } from "react"
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"

function ContactUs() {

  useEffect(() =>{
    document.title = "Contact Us | Concert Craft"
  }, [])

  return (
    <>
      <NavBar />
      <h1>Contact Us</h1>
      <Footer />
    </>
  )
}

export default ContactUs
