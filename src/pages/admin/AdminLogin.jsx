import { useFormik, validateYupSchema } from "formik"
import * as Yup from 'yup'
import "./AdminLogin.css"
import logo from "/Concert-Craft-Logo-Transparent.png"
import { useEffect } from "react"

function AdminLogin() {
  const formik = useFormik({

    initialValues: {
      adminUsername: '',
      adminPassword: ''
    },

    validationSchema: Yup.object({
      adminUsername: Yup.string().required("Username is required").matches(/^(admin|ADMIN)$/g, "Nice Try"),
      adminPassword: Yup.string().required("Password is required").matches(/^(1234)$/g, "Nice Try")
    }),

    onSubmit: (value) => {
      console.log(value)
      window.location.href="/admin/dashboard/bookings"
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
    </>
  )
}

export default AdminLogin
