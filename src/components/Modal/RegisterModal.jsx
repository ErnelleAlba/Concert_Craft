import "./RegisterModal.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Toast } from "bootstrap";
import axios from "axios";

function RegisterModal() {
  const removeScroll = (e) => e.target.blur();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      username: "",
      email: "",
      phone: "",
      age: "",
      role: "regular",
      confirmPass: "",
      password: "",
      address: "",
    },

    validationSchema: Yup.object({
      firstName: Yup.string().required("This field is required"),
      lastName: Yup.string().required("This field is required"),
      username: Yup.string().required("This field is required"),
      email: Yup.string().required("Email is required"),
      phone: Yup.string()
        .required("This field is required")
        .matches(/^[0-9]+$/, "Must be only digits")
        .min(10, "Must be exactly 10 digits")
        .max(10, "Must be exactly 10 digits"),
      age: Yup.number()
        .required("This field is required")
        .min(18, "Age must be 18 or above"),
      password: Yup.string()
        .required("This field is required")
        .min(8, "Password must be at least 8 characters"),
      confirmPass: Yup.string()
        .required("This field is required")
        .oneOf([Yup.ref("password"), null], "Password must match!"),
      address: Yup.string().required("This field is required"),
    }),

    onSubmit: async (value) => {
      console.log(value);
      try {
        const res = await axios.post(
          "http://localhost:8000/api/v1/users",
          {
            firstName: value.firstName,
            lastName: value.lastName,
            username: value.username,
            email: value.email,
            phone: value.phone,
            age: value.age,
            role: "regular",
            password: value.password,
            address: value.address,
          },
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
          }
        );

        console.log(res);

        if (res.status === 201) {
          new Toast(
            document.getElementById("RegisterSuccessfullyToast")
          ).show();
        } else {
          new Toast(document.getElementById("RegisterErrorToast")).show();
        }
      } catch (err) {
        console.log(err);
        new Toast(document.getElementById("RegisterErrorToast")).show();
      }
    },
  });

  return (
    <>
      <div
        className="modal fade"
        id="registerModal"
        aria-labelledby="registerModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content bg-transparent">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="registerModalLabel">
                Register Form
              </h1>
              <button
                type="button"
                className="btn py-2"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <i
                  className="fa-solid fa-xmark fa-2xl "
                  style={{ color: "#ffffff" }}
                ></i>
              </button>
            </div>
            <div className="user-login-modal modal-body">
              <form
                className="row g-3"
                onSubmit={formik.handleSubmit}
                autoComplete="off"
              >
                <div className="col-md-6">
                  <label htmlFor="firstName" className="form-label text-white">
                    First name
                  </label>
                  <input
                    type="text"
                    className={
                      formik.errors.firstName && formik.touched.firstName
                        ? "is-invalid form-control"
                        : "form-control"
                    }
                    id="firstName"
                    value={formik.values.firstName}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                  />
                  {formik.errors.firstName && formik.touched.firstName ? (
                    <span className="text-danger">
                      {formik.errors.firstName}
                    </span>
                  ) : null}
                </div>
                <div className="col-md-6">
                  <label htmlFor="lastName" className="form-label text-white">
                    Last name
                  </label>
                  <input
                    type="text"
                    className={
                      formik.errors.lastName && formik.touched.lastName
                        ? "is-invalid form-control"
                        : "form-control"
                    }
                    id="lastName"
                    value={formik.values.lastName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.errors.lastName && formik.touched.lastName ? (
                    <span className="text-danger">
                      {formik.errors.lastName}
                    </span>
                  ) : null}
                </div>
                <div className="col-md-6">
                  <label htmlFor="username" className="form-label text-white">
                    Username
                  </label>
                  <input
                    type="text"
                    className={
                      formik.errors.username && formik.touched.username
                        ? "is-invalid form-control"
                        : "form-control"
                    }
                    id="username"
                    value={formik.values.username}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.errors.username && formik.touched.username ? (
                    <span className="text-danger">
                      {formik.errors.username}
                    </span>
                  ) : null}
                </div>
                <div className="col-md-6">
                  <label htmlFor="email" className="form-label text-white">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className={
                      formik.errors.email && formik.touched.email
                        ? "is-invalid form-control"
                        : "form-control"
                    }
                    id="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.errors.email && formik.touched.email ? (
                    <span className="text-danger">{formik.errors.email}</span>
                  ) : null}
                </div>
                <div className="col-md-6">
                  <label htmlFor="phone" className="form-label text-white">
                    Phone No.
                    <small className="text-danger ms-1">
                      *Must be 10 digits
                    </small>
                  </label>
                  <input
                    type="number"
                    className={
                      formik.errors.phone && formik.touched.phone
                        ? "is-invalid form-control"
                        : "form-control"
                    }
                    id="phone"
                    value={formik.values.phone}
                    onChange={formik.handleChange}
                    onWheel={removeScroll}
                    onBlur={formik.handleBlur}
                  />
                  {formik.errors.phone && formik.touched.phone ? (
                    <span className="text-danger">{formik.errors.phone}</span>
                  ) : null}
                </div>
                <div className="col-md-6">
                  <label htmlFor="age" className="form-label text-white">
                    Age
                  </label>
                  <input
                    type="number"
                    className={
                      formik.errors.age && formik.touched.age
                        ? "is-invalid form-control"
                        : "form-control"
                    }
                    id="age"
                    value={formik.values.age}
                    onChange={formik.handleChange}
                    onWheel={removeScroll}
                    onBlur={formik.handleBlur}
                  />
                  {formik.errors.age && formik.touched.age ? (
                    <span className="text-danger">{formik.errors.age}</span>
                  ) : null}
                </div>
                <div className="col-md-12">
                  <label htmlFor="password" className="form-label text-white">
                    Password{" "}
                    <small className="text-danger ms-1">
                      *Min. of 8 characters
                    </small>
                  </label>
                  <input
                    type="password"
                    className={
                      formik.errors.password && formik.touched.password
                        ? "is-invalid form-control"
                        : "form-control"
                    }
                    id="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.errors.password && formik.touched.password ? (
                    <span className="text-danger">
                      {formik.errors.password}
                    </span>
                  ) : null}
                </div>
                <div className="col-md-12">
                  <label
                    htmlFor="confirmPass"
                    className="form-label text-white"
                  >
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    className={
                      formik.errors.confirmPass && formik.touched.confirmPass
                        ? "is-invalid form-control"
                        : "form-control"
                    }
                    id="confirmPass"
                    value={formik.values.confirmPass}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.errors.confirmPass && formik.touched.confirmPass ? (
                    <span className="text-danger">
                      {formik.errors.confirmPass}
                    </span>
                  ) : null}
                </div>
                <div className="col-md-12">
                  <label htmlFor="address" className="form-label text-white">
                    Address
                  </label>
                  <input
                    type="text"
                    className={
                      formik.errors.address && formik.touched.address
                        ? "is-invalid form-control"
                        : "form-control"
                    }
                    id="address"
                    value={formik.values.address}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.errors.address && formik.touched.address ? (
                    <span className="text-danger">{formik.errors.address}</span>
                  ) : null}
                </div>
                <div className="col-12">
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      value=""
                      id="invalidCheck"
                    />
                    <label
                      className="form-check-label text-white"
                      htmlFor="invalidCheck"
                    >
                      Agree to terms and conditions
                    </label>
                    {/* <div className="invalid-feedback">
                      You must agree before submitting.
                    </div> */}
                  </div>
                </div>
                <div className="col-12">
                  <button type="submit" className="btn btn-primary me-3">
                    Register Account
                  </button>
                  <a
                    role="button"
                    className="btn btn-secondary"
                    data-bs-toggle="modal"
                    data-bs-target="#loginModal"
                  >
                    Back to Login
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="toast-container position-fixed bottom-0 end-0 p-3">
        <div
          id="RegisterSuccessfullyToast"
          className="toast bg-success"
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
        >
          <div className="toast-header bg-success text-light">
            <strong className="me-auto">
              Register Successfully! Go back to login.
            </strong>
            <button
              type="button"
              className="btn"
              data-bs-dismiss="toast"
              aria-label="Close"
            >
              <i
                className="fa-solid fa-xmark fa-2xl "
                style={{ color: "#ffffff" }}
              ></i>
            </button>
          </div>
        </div>
      </div>
      <div className="toast-container position-fixed bottom-0 end-0 p-3">
        <div
          id="RegisterErrorToast"
          className="toast bg-danger"
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
        >
          <div className="toast-header bg-danger text-light">
            <strong className="me-auto">Register Error!</strong>
            <button
              type="button"
              className="btn"
              data-bs-dismiss="toast"
              aria-label="Close"
            >
              <i
                className="fa-solid fa-xmark fa-2xl "
                style={{ color: "#ffffff" }}
              ></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default RegisterModal;
