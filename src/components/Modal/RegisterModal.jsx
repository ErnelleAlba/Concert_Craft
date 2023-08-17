import "./RegisterModal.css"
import { useEffect } from "react"
import "./LoginModal.css"
import { useFormik } from "formik";

function RegisterModal() {
  const removeScroll = (e) => e.target.blur();

  

  useEffect(() =>{
    
  }, [])

  const formik = useFormik({
    initialValues: {
      firstname: '',
      lastname: '',
      email: '',
      phone: '',
      password: '',
      address: ''
    },
    onSubmit: (value) => {
      console.log(value)
    }
  })

  return (
    <> <div className="modal fade" id="registerModal" data-bs-backdrop="static" tabIndex="-1" aria-labelledby="registerModal" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content bg-transparent">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="registerModal">Register Form</h1>
              <button 
                type="button" 
                className="btn-close" 
                data-bs-dismiss="modal" 
                aria-label="Close">
              </button>
            </div>
            <div className="kard user-login modal-body">
              <form className="row g-3 needs-validation" 
              onSubmit={formik.handleSubmit}
              >
                <div className="col-md-6">
                  <label htmlFor="first-name" className="form-label text-white">First name</label>
                  <input
                    type="text" 
                    className="form-control" 
                    id="firstname" 
                    value={formik.values.firstname}
                    onChange={formik.handleChange}
                    />
                
                </div>
                <div className="col-md-6">
                  <label htmlFor="last-name" className="form-label text-white">Last name</label>
                  <input
                    type="text" 
                    className="form-control" 
                    id="lastname" 
                    value={formik.values.lastname}
                    onChange={formik.handleChange}
                    />
                </div>
                <div className="col-md-6">
                  <label htmlFor="email-address" className="form-label text-white">Email Address</label>
                  <input
                    type="email" 
                    className="form-control" 
                    id="email" 
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    />

         
                </div>
                <div className="col-md-6">
                  <label htmlFor="phone-number" className="form-label text-white">Phone No.</label>
                    <input 
                      type="number" 
                      className="form-control" 
                      id="phone" 
                      value={formik.values.phone}
                      onChange={formik.handleChange}
                      onWheel={removeScroll} 
                      />
         
                </div>
                <div className="col-md-12">
                  <label htmlFor="password" className="form-label text-white">Password</label>
                  <input 
                    type="password" 
                    className="form-control" 
                    id="password" 
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    />
                </div>
                <div className="col-md-12">
                  <label htmlFor="address" className="form-label text-white">Address</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    id="address" 
                    value={formik.values.address}
                    onChange={formik.handleChange}
                    required/>
            
                </div>
                <div className="col-12">
                  <div className="form-check">
                    <input 
                      type="checkbox"
                      className="form-check-input"  
                      value="" 
                      id="invalidCheck" 
                      />
                    <label className="form-check-label text-white" htmlFor="invalidCheck">
                      Agree to terms and conditions
                    </label>
                    <div className="invalid-feedback">
                      You must agree before submitting.
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <input 
                    type="submit" 
                    id="registerbtn" 
                    name="register_submit" 
                    value="Register Account" 
                    className="btn btn-primary me-3"/>
                  <button 
                    className="btn btn-secondary" 
                    data-bs-toggle="modal" 
                    data-bs-target="#loginModal"
                    >Back to Login</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default RegisterModal
