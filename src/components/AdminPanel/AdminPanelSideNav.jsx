import { NavLink } from "react-router-dom"


function AdminPanelSideNav() {
  return (
    <>
      <div className="container-fluid col-4">
        <div className="row flex-nowrap">
          <div className="bg-dark col-auto col-md-2 min-vh-100">
            <div>
              <div className="d-flex align-items-center flex-column">
                <h3 className="fs-4 d-none d-sm-inline text-light">MENU</h3>
                <ul className="nav nav-pills flex-column mt-4">
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/admin-panel/bookings-data">Booking List</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/admin-panel/concerts-data">Concerts List</NavLink>
                  </li>
                  <li className="nav-item disabled">
                    <NavLink className="nav-link" to="/admin-panel/users-data">Users List</NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AdminPanelSideNav
