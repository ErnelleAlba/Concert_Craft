import { Link, NavLink } from "react-router-dom"
import "./AdminPanelSideNav.css"


function AdminPanelSideNav() {
  return (
    <>
      <div className="d-flex flex-wrap ms-0 col-md-4 col-lg-4 col-xl-2 ">
        <div className="d-flex align-items-center flex-column justify-content-between bg-dark w-100 px-2 px-md-4 px-lg-4" id="sidebar-container">
          <div className="d-flex flex-column align-items-center">
              <h2 className="d-none d-md-inline text-light mt-4">MENU</h2>
              <ul className="nav nav-pills flex-column mt-4 gap-4">
                <li className="nav-item py-1 py-sm-0">
                  <NavLink className="nav-link"  id="admin-nav" to="/admin/dashboard/bookings"><i className="fa-solid fa-ticket me-0 me-md-3 me-lg-3"></i><span className="d-md-inline d-none">Bookings List</span></NavLink>
                </li>
                <li className="nav-item py-1 py-sm-0">
                  <NavLink className="nav-link"  id="admin-nav" to="/admin/dashboard/concerts"><i className="fa-solid fa-music me-0 me-md-3 me-lg-3"></i><span className="d-md-inline d-none">Concerts List</span></NavLink>
                </li>
                <li className="nav-item py-1 py-sm-0">
                  <NavLink className="nav-link px-0"  id="admin-nav" to="/admin/dashboard/users"><i className="fa-solid fa-user me-0 me-md-3 me-lg-3"></i><span className="d-md-inline d-none">Users List</span></NavLink>
                </li>
              </ul>
          </div>
          
            <div className="nav-item py-1 py-sm-0 mb-5 w-100 logout-btn">
              <Link className="nav-link logout-btn"  id="admin-nav" to="/admin"><i className="fa-solid fa-right-from-bracket me-0 me-md-3 me-lg-3"></i><span className="d-md-inline d-none">Log Out</span></Link>
            </div>
          
        </div>
      </div>
    </>
  )
}

export default AdminPanelSideNav
