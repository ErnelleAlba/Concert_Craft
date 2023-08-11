import "./AdminLogin.css"
import logo from "/Concert-Craft-Logo-Transparent.png"
import { useEffect } from "react"

function AdminLogin() {
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
      document.title = "Admin Login | Concert Craft"
  }, [])

  return (
    <>
      <div className="admin-login-container">
        <center>
          <div className="container-fluid">
            <div className="card admin-login">
              <img src={logo} alt="Concert-Craft-Logo" className="card-img-top" />
              <div className="card-body">
                <h3 className="mb-4">Admin Login</h3>
                <form 
                  autoComplete="off" 
                  className="form-group needs-validation" 
                  action="/admin/dashboard/bookings" 
                  noValidate>
                  <div className="row">
                    <div className="col-md-4">
                      <label style={{color:"white"}}>Username: </label>
                    </div>
                    <div className="col-md-8">
                      <input 
                        type="text" 
                        name="username" 
                        className="form-control" 
                        placeholder="Enter Username" 
                        required/>
                      <div className="invalid-feedback">
                        Invalid Username
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
                  </center>
                </form>
              </div>
            </div>
          </div>
        </center>
      </div>
    </>
  )
}

export default AdminLogin
