import RegisterModal from "./RegisterModal"
import logo from "/Concert-Craft-Logo-Transparent.png"
import { useEffect } from "react"
import "./LoginModal.css"
import { useFormik } from "formik"
import * as Yup from "yup"
import { Toast } from 'bootstrap';


function LoginModal() {
  

  useEffect(() =>{
   
  }, [])

  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: Yup.object({
      email: Yup.string().required("Email is required"),
      password: Yup.string().required("Password is required"),
    }),

    onSubmit: (value) => {
      console.log(value)
      new Toast(document.getElementById('logintoast')).show()
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
                  className="form-group" 
                  onSubmit={formik.handleSubmit}
                  >
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
                        />
                        {
                          formik.errors.email && <span className="text-danger">{formik.errors.email}</span>
                        }
                        
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
                        />
                        {
                          formik.errors.password && <span className="text-danger">{formik.errors.password}</span>
                        }
                    </div>
                    <br/><br/><br/>
                  </div>
                  <div className="col-12">
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
                  </div>
                </form>
              </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="toast-container position-fixed bottom-0 end-0 p-3">
            <div id="logintoast" className="toast bg-success" role="alert" aria-live="assertive" aria-atomic="true">
              <div className="toast-header bg-success text-light">
                <strong className="me-auto">Login Successfully!</strong>
                <small>1 seconds ago</small>
                <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
              </div>
             </div>
            </div> 
        
    </>
  )
}

export default LoginModal
