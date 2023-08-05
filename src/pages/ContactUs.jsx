import { useEffect } from "react"

function ContactUs() {

  useEffect(() =>{
    document.title = "Contact Us | Concert Craft"
  }, [])

  return (
    <>
      <h1>Contact Us</h1>
    </>
  )
}

export default ContactUs
