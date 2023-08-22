import logo from "/Concert-Craft-Logo-Transparent.png"
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
      <div className="modal fade" id="loginModal" aria-labelledby="loginModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content bg-transparent">
            <div className="modal-header">
              <h3 className="modal-title" id="loginModalLabel">Login</h3>
              <button type="button" className="btn py-2" data-bs-dismiss="modal" aria-label="Close"><i className="fa-solid fa-xmark fa-2xl " style={{color: "#ffffff"}}></i></button>
            </div>
            <div className="modal-body user-login-modal">
              <img src={logo} alt="Concert-Craft-Logo" className="w-100" />
              <div className="mt-2">
                <form 
                  autoComplete="off" 
                  className="form-group" 
                  onSubmit={formik.handleSubmit}
                  >
                  <div className="row">
                    <div className="col-md-4">
                      <label className="form-label text-white">Username: </label>
                    </div>
                    <div className="col-md-8">
                      <input 
                        type="text" 
                        id="username" 
                        className={formik.errors.username && formik.touched.username
                          ? 
                          "is-invalid form-control" 
                          : 
                          "form-control"} 
                        placeholder="Enter Username" 
                        value={formik.values.username}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        />
                        {
                          formik.errors.username && formik.touched.username
                          ? 
                          <span className="text-danger">{formik.errors.username}</span> 
                          : 
                          null
                        }
                    </div>
                    <br/><br/>
                    <div className="col-md-4">
                      <label className="form-label text-white">Password: </label>
                    </div>
                    <div className="col-md-8">
                      <input 
                        type="password" 
                        className={formik.errors.password && formik.touched.password
                          ? 
                          "is-invalid form-control" 
                          : 
                          "form-control"} 
                        id="password" 
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        placeholder="Enter Password" 
                        />
                        {
                          formik.errors.password && formik.touched.password
                          ? 
                          <span className="text-danger">{formik.errors.password}</span> 
                          : 
                          null
                        }
                    </div>
                    <br/><br/><br/>
                  </div>
                  <div className="col-12">
                    <center>
                      <button type="submit" className="btn btn-primary w-100 mb-2">
                          Login
                      </button>
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
