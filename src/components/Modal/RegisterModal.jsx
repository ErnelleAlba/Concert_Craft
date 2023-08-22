import "./RegisterModal.css"
import { useEffect } from "react"
import "./LoginModal.css"
import { useFormik } from "formik";
import * as Yup from "yup"
import { Toast } from 'bootstrap';

function RegisterModal() {
  const removeScroll = (e) => e.target.blur();

  

  useEffect(() =>{
    
  }, [])

  const formik = useFormik({
    initialValues: {
      firstname: '',
      lastname: '',
      email: '',
      phone: '',
      age: '',
      confirmPass: '',
      passwordreg: '',
      address: ''
    },

    validationSchema: Yup.object({
      firstname: Yup.string().required("This field is required"),
      lastname: Yup.string().required("This field is required"),
      email: Yup.string().required("Email is required"),
      phone: Yup.string().required("This field is required"),
      age: Yup.string().required("This field is required"),
      confirmPass: Yup.string().required("This field is required"),
      passwordreg: Yup.string().required("This field is required"),
      address: Yup.string().required("This field is required"),
    }),

    onSubmit: (value) => {
      console.log(value)
      new Toast(document.getElementById('liveToast')).show()
    }
  })

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
              <form className="row g-3 needs-validation" 
              onSubmit={formik.handleSubmit}
              >
                <div className="col-md-6">
                  <label htmlFor="first-name" className="form-label text-white">First name</label>
                  <input
                    type="text" 
                    className="form-control" 
                    id="firstname" 
                    value={formik.values.firstname}
                    onChange={formik.handleChange}
                    />
                        {
                          formik.errors.firstname && <span className="text-danger">{formik.errors.firstname}</span>
                        }
                </div>
                <div className="col-md-6">
                  <label htmlFor="last-name" className="form-label text-white">Last name</label>
                  <input
                    type="text" 
                    className="form-control" 
                    id="lastname" 
                    value={formik.values.lastname}
                    onChange={formik.handleChange}
                    />
                        {
                          formik.errors.lastname && <span className="text-danger">{formik.errors.lastname}</span>
                        }
                </div>
                <div className="col-md-6">
                  <label htmlFor="email-address" className="form-label text-white">Email Address</label>
                  <input
                    type="email" 
                    className="form-control" 
                    id="email" 
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    />
                        {
                          formik.errors.email && <span className="text-danger">{formik.errors.email}</span>
                        }
                </div>
                <div className="col-md-6">
                  <label htmlFor="phone-number" className="form-label text-white">Phone No.</label>
                    <input 
                      type="number" 
                      className="form-control" 
                      id="phone" 
                      value={formik.values.phone}
                      onChange={formik.handleChange}
                      onWheel={removeScroll} 
                      />
                        {
                          formik.errors.phone && <span className="text-danger">{formik.errors.phone}</span>
                        }
                </div>
                <div className="col-md-6">
                  <label htmlFor="age" className="form-label text-white">Age</label>
                    <input 
                      type="number" 
                      className="form-control" 
                      id="age" 
                      value={formik.values.age}
                      onChange={formik.handleChange}
                      onWheel={removeScroll} 
                      />
                        {
                          formik.errors.age && <span className="text-danger">{formik.errors.age}</span>
                        }
                </div>
                <div className="col-md-12">
                  <label htmlFor="password" className="form-label text-white">Password</label>
                  <input 
                    type="passwordreg" 
                    className="form-control" 
                    id="passwordreg" 
                    value={formik.values.passwordreg}
                    onChange={formik.handleChange}
                    />
                        {
                          formik.errors.passwordreg && <span className="text-danger">{formik.errors.passwordreg}</span>
                        }
                </div>
                <div className="col-md-12">
                  <label htmlFor="password" className="form-label text-white">Confirm Password</label>
                  <input 
                    type="password" 
                    className="form-control" 
                    id="confirmPass" 
                    value={formik.values.confirmPass}
                    onChange={formik.handleChange}
                    />
                        {
                          formik.errors.confirmPass && <span className="text-danger">{formik.errors.confirmPass}</span>
                        }
                </div>
                <div className="col-md-12">
                  <label htmlFor="address" className="form-label text-white">Address</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    id="address" 
                    value={formik.values.address}
                    onChange={formik.handleChange}
                    />
                        {
                          formik.errors.address && <span className="text-danger">{formik.errors.address}</span>
                        }
                </div>
                <div className="col-12">
                  <div className="form-check">
                    <input 
                      type="checkbox"
                      className="form-check-input"  
                      value="" 
                      id="invalidCheck" 
                      />
                    <label className="form-check-label text-white" htmlFor="invalidCheck">
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
      <div className="toast-container position-fixed bottom-0 end-0 p-3">
        <div id="liveToast" className="toast bg-success" role="alert" aria-live="assertive" aria-atomic="true">
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

export default RegisterModal
