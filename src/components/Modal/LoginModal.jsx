import RegisterModal from "./RegisterModal"
import logo from "/Concert-Craft-Logo-Transparent.png"
import { useEffect } from "react"
import "./LoginModal.css"
import { useFormik } from "formik"
import * as Yup from "yup"
import { Toast } from 'bootstrap';
import axios from 'axios';


function LoginModal() {
  

  const formik = useFormik({
    initialValues: {
      username: '',
      password: ''
    },
    validationSchema: Yup.object({
      username: Yup.string().required("Username is required"),
      password: Yup.string().required("Password is required"),
    }),

    onSubmit: async (value) => {
      console.log(value)

        try {
        const res = await axios.post('http://localhost:8000/api/v1/login', {
          username: value.username,
          password: value.password,
        },
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        }
        )
        console.log(res)
      
        if (res.status === 201) {
          new Toast(document.getElementById('LoginSuccessToast')).show()
        }
      } catch (err) {
        new Toast(document.getElementById('LoginErrortoast')).show()
      }
    },
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
                        id="username" 
                        className="form-control" 
                        placeholder="Enter Username" 
                        value={formik.values.username}
                        onChange={formik.handleChange}
                        />
                        {
                          formik.errors.username && <span className="text-danger">{formik.errors.username}</span>
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
            <div id="LoginSuccessToast" className="toast bg-success" role="alert" aria-live="assertive" aria-atomic="true">
              <div className="toast-header bg-success text-light">
                <strong className="me-auto">Login Successfully!</strong>
                <small>1 seconds ago</small>
                <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
              </div>
             </div>
            </div> 
        
            <div className="toast-container position-fixed top-0 end-0 pe-3 pt-5 mt-3 ">
                <div id="LoginErrorToast" className="toast align-items-center text-bg-danger border-0" role="alert" aria-live="assertive" aria-atomic="true">
                  <div className="d-flex">
                    <div className="toast-body">
                      Something went wrong.
                    </div>
                    <button type="button" className="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
                  </div>
                </div>
              </div>
    </>
  )
}

export default LoginModal
