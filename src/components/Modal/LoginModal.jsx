import RegisterModal from "./RegisterModal"

function LoginModal() {
  return (
    <>
      <div className="modal fade" id="loginModal" data-bs-backdrop="static" tabindex="-1" aria-labelledby="loginModal" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" style={{width:"400px", padding:"30px"}}>
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="loginModal">Login Form</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form className="needs-validation">
                <div className="form-group was-validated mb-2">
                  <label htmlFor="email" className="form-label">Email Address</label>
                  <input type="email" name="email-address" className="form-control" required/>
                  <div className="invalid-feedback">
                    Please Enter Your Email Address
                  </div>
                </div>
                <div className="form-group was-validated mb-2">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input type="password" name="password" className="form-control" required/>
                  <div className="invalid-feedback">
                    Please Enter Your Password
                  </div>
                </div>
                <button type="submit" className="btn btn-primary mt-2 w-100">Sign In</button>
                <button type="button" className="btn btn-success mt-2 w-100" data-bs-toggle="modal" data-bs-target="#registerModal">Create an Account</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <RegisterModal/>
    </>
  )
}

export default LoginModal
