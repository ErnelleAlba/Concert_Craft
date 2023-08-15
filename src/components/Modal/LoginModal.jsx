import RegisterModal from "./RegisterModal"
import logo from "/Concert-Craft-Logo-Transparent.png"
import { useEffect } from "react"
import "./LoginModal.css"


function LoginModal() {
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
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content bg-transparent">
            <div className="modal-header">
              <h3 className="modal-title">Login</h3>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button></div>
              <div className="kard user-login">
              <img src={logo} alt="Concert-Craft-Logo" className="card-img-top" />
              <div className="card-body">
                <form 
                  autoComplete="off" 
                  className="form-group needs-validation" 
                  action="/admin/dashboard/bookings" 
                  noValidate>
                  <div className="row">
                    <div className="col-md-4">
                      <label style={{color:"white"}}>Email: </label>
                    </div>
                    <div className="col-md-8">
                      <input 
                        type="text" 
                        name="username" 
                        className="form-control" 
                        placeholder="Enter Username" 
                        required/>
                      <div className="invalid-feedback">
                        Invalid Email
                      </div>
                    </div>
                    <br/><br/>
                    <div className="col-md-4">
                      <label style={{color:"white"}}>Password: </label>
                    </div>
                    <div className="col-md-8">
                      <input 
                        type="password" 
                        className="form-control" 
                        name="password" 
                        placeholder="Enter Password" 
                        required/>
                      <div className="invalid-feedback">
                        Invalid Password
                      </div>
                    </div>
                    <br/><br/><br/>
                  </div>
                  <center>
                    <input 
                      type="submit" 
                      id="inputbtn" 
                      name="login_submit" 
                      value="Login" 
                      className="btn btn-primary w-100"/>
                      <br />
                      <br />
                  <button 
                    className="btn btn-success w-100" 
                    data-bs-toggle="modal" 
                    data-bs-target="#registerModal"
                    >Back to Login</button>
                  </center>
                </form>
              </div>
                  </div>
                </div>
              </div>
            </div>
     
          
     

      <RegisterModal/>
    </>
  )
}

export default LoginModal
