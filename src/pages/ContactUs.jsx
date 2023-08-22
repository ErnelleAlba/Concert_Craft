import { useEffect } from "react"
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import "../components/HomePage/ConcertCard.css"
import { useFormik } from "formik";
import * as Yup from "yup"

function ContactUs() {

  useEffect(() =>{
    document.title = "Contact Us | Concert Craft"
  }, [])

  const formik = useFormik({
    initialValues: {
      emailcontact: '',
      message: '',
    },

    validationSchema: Yup.object({
      emailcontact: Yup.string().required("This field is required"),
      message: Yup.string().required("This field is required"),
    }),

    onSubmit: (value) => {
      console.log(value)
    }
  })

  return (
    <>
      <NavBar />
      <div className="concert-show-container">
      <h1>Contact Us</h1>
      
      <div>
        <form className="form-group" 
          onSubmit={formik.handleSubmit}>
        <div className="contactCard col-md-4">
          <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
            <input type="email" 
            class="form-control" 
            id="emailcontact" 
            placeholder="name@example.com" 
            value={formik.values.emailcontact}
            onChange={formik.handleChange}
            />
              {
                formik.errors.emailcontact && <span className="text-danger">{formik.errors.emailcontact}</span>
              }
        </div>
        <div className="contactCard col-md-8">
            <label htmlFor="exampleFormControlTextarea1" class="form-label">Message</label>
            <textarea class="form-control" 
            type="text"
            id="message" 
            value={formik.values.message}
            onChange={formik.handleChange}
            rows="6"
            />
              {
                formik.errors.message && <span className="text-danger">{formik.errors.message}</span>
              }
            <br />
          <div>
          <button type="button" class="btn btn-dark btn-lg btn-block col-md-4 text-light"><i class="fa-solid fa-message"></i> Submit</button>
          </div>
        </div>
        </form>
      </div>
      </div>
      <Footer />
    </>
  )
}

export default ContactUs
