
import { useEffect } from "react"

function BookingPage() {
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
    <>
      <div className="modal fade" id="loginModal" data-bs-keyboard="true" tabIndex="-1" aria-labelledby="loginModal" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" style={{width:"400px", padding:"30px"}}>
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5">Login Form</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form className="needs-validation" noValidate>
                <div className="form-group mb-2">
                  <label htmlFor="email" className="form-label">Email Address</label>
                  <input type="email" 
                         name="email-address" 
                         className="form-control" 
                         required/>
                  <div className="invalid-feedback">
                    Please Enter Your Email Address
                  </div>
                </div>
                <div className="form-group mb-2">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input type="password" 
                         name="password" 
                         className="form-control" 
                         required/>
                  <div className="invalid-feedback">
                    Please Enter Your Password
                  </div>
                </div>
                <input type="submit" 
                       id="loginbtn" 
                       name="login_submit" 
                       value="Login" 
                       className="btn btn-primary w-100"/>
                <button type="button" className="btn btn-success mt-2 w-100" data-bs-toggle="modal" data-bs-target="#registerModal">Create an Account</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default BookingPage
