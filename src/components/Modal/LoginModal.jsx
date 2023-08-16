import RegisterModal from "./RegisterModal"
import logo from "/Concert-Craft-Logo-Transparent.png"
import { useEffect } from "react"
import "./LoginModal.css"
import { useFormik } from "formik"


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

  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    onSubmit: (value) => {
      console.log(value)
    }
  })

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
                  onSubmit={formik.handleSubmit}
                  noValidate>
                  <div className="row">
                    <div className="col-md-4">
                      <label style={{color:"white"}}>Email: </label>
                    </div>
                    <div className="col-md-8">
                      <input 
                        type="text" 
                        id="email" 
                        className="form-control" 
                        placeholder="Enter Username" 
                        value={formik.values.email}
                        onChange={formik.handleChange}
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
                        id="password" 
                        value={formik.values.password}
                        onChange={formik.handleChange}
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
                    >Register</button>
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
