import "./RegisterModal.css"
import { useEffect } from "react"
import "./LoginModal.css"

function RegisterModal() {
  const removeScroll = (e) => e.target.blur();

  const needValidation = () => {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  }

  useEffect(() =>{
    needValidation()
  }, [])

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
              <form className="row g-3 needs-validation" noValidate>
                <div className="col-md-6">
                  <label htmlFor="first-name" className="form-label text-white">First name</label>
                  <input
                    type="text" 
                    className="form-control" 
                    id="first-name" 
                    required/>
                  <div className="valid-feedback">
                    Looks good!
                  </div>
                </div>
                <div className="col-md-6">
                  <label htmlFor="last-name" className="form-label text-white">Last name</label>
                  <input
                    type="text" 
                    className="form-control" 
                    id="last-name" 
                    required/>
                  <div className="valid-feedback">
                    Looks good!
                  </div>
                </div>
                <div className="col-md-6">
                  <label htmlFor="email-address" className="form-label text-white">Email Address</label>
                  <input
                    type="email" 
                    className="form-control" 
                    id="email-address" 
                    required/>
                  <div className="invalid-feedback">
                    Please provide your email address.
                  </div>
                  <div className="valid-feedback">
                    Looks good!
                  </div>
                </div>
                <div className="col-md-6">
                  <label htmlFor="phone-number" className="form-label text-white">Phone No.</label>
                    <input 
                      type="number" 
                      className="form-control" 
                      id="phone-number" 
                      onWheel={removeScroll} 
                      required/>
                    <div className="invalid-feedback">
                      Please provide your phone number.
                    </div>
                    <div className="valid-feedback">
                    Looks good!
                  </div>
                </div>
                <div className="col-md-12">
                  <label htmlFor="password" className="form-label text-white">Password</label>
                  <input 
                    type="password" 
                    className="form-control" 
                    id="password" 
                    required/>
                  <div className="invalid-feedback">
                  Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
                  </div>
                  <div className="valid-feedback">
                    Looks good!
                  </div>
                </div>
                <div className="col-md-12">
                  <label htmlFor="address" className="form-label text-white">Address</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    id="address" 
                    required/>
                  <div className="invalid-feedback">
                    Please provide your address.
                  </div>
                  <div className="valid-feedback">
                    Looks good!
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-check">
                    <input 
                      type="checkbox"
                      className="form-check-input"  
                      value="" 
                      id="invalidCheck" 
                      required/>
                    <label className="form-check-label text-white" for="invalidCheck">
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
