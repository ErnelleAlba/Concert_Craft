import { useFormik, validateYupSchema } from "formik"
import * as Yup from 'yup'
import "./AdminLogin.css"
import logo from "/Concert-Craft-Logo-Transparent.png"
import { useEffect } from "react"
import axios from "axios"
import { Toast } from "bootstrap"
import { useDispatch } from "react-redux"
import { setUser } from "../../store/loggedInUserReducers"
import { setToken } from "../../store/tokenReducers"

function AdminLogin() {
  const dispatch = useDispatch();

  const formik = useFormik({

    initialValues: {
      adminUsername: '',
      adminPassword: ''
    },

    validationSchema: Yup.object({
      adminUsername: Yup.string().required("Username is required"),
      adminPassword: Yup.string().required("Password is required")
    }),

    onSubmit: async (value) => {
      console.log(value)

      try {
        const res = await axios.post('http://localhost:8000/api/v1/login', {
            username: value.adminUsername,
            password: value.adminPassword,
          },
          {
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
            }
          }
        )

        console.log(res)

        if (res.data.user.role === "admin") {
          dispatch(setToken(res.data.user.token))
          window.location.href="/admin/dashboard"
        } else {
          dispatch(setUser(null));
          new Toast(document.getElementById('adminLoginErrorToast')).show()
        }

      } catch (err) {
        console.log(err)
        new Toast(document.getElementById('adminLoginErrorToast')).show()

      }
    },
  })

  useEffect(() =>{
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
                  onSubmit={formik.handleSubmit}
                  autoComplete="off" 
                  className="form-group" 
                  action="/admin/dashboard/bookings" 
                  noValidate>
                  <div className="row">
                    <div className="col-md-4">
                      <label style={{color:"white"}}>Username: </label>
                    </div>
                    <div className="col-md-8">
                      <input 
                        type="text" 
                        id="adminUsername"
                        name="adminUsername" 
                        className={formik.errors.adminUsername && formik.touched.adminUsername ? "is-invalid form-control" : "form-control"}
                        placeholder="Enter Username"
                        value={formik.values.adminUsername}
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}  
                        />
                      {
                        formik.errors.adminUsername && formik.touched.adminUsername
                        ? 
                        <span className="text-danger">{formik.errors.adminUsername}</span> 
                        : 
                        null
                      }
                    </div>
                    <br/><br/>
                    <div className="col-md-4">
                      <label style={{color:"white"}}>Password: </label>
                    </div>
                    <div className="col-md-8">
                      <input 
                        type="password"
                        id="adminPassword" 
                        className={formik.errors.adminPassword && formik.touched.adminPassword ? "is-invalid form-control" : "form-control"} 
                        name="adminPassword" 
                        placeholder="Enter Password"
                        value={formik.values.adminPassword}
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}  
                        />
                      {
                        formik.errors.adminPassword && formik.touched.adminPassword
                        ? 
                        <span className="text-danger">{formik.errors.adminPassword}</span> 
                        : 
                        null
                      }
                    </div>
                    <br/><br/><br/>
                  </div>
                  <center>
                    <button type="submit" className="btn btn-primary w-100">Login</button>
                  </center>
                </form>
              </div>
            </div>
          </div>
        </center>
      </div>
      <div className="toast-container position-fixed top-0 end-0 pe-3 pt-5">
        <div id="adminLoginErrorToast" className="toast align-items-center text-bg-danger border-0" role="alert" aria-live="assertive" aria-atomic="true">
          <div className="d-flex">
            <div className="toast-body">
              Wrong Username and Password
            </div>
            <button type="button" className="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
          </div>
        </div>
      </div>
    </>
  )
}

export default AdminLogin
