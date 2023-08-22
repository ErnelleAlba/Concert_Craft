import AdminPanelHeader from "../../components/AdminPanel/AdminPanelHeader"
import AdminPanelSideNav from "../../components/AdminPanel/AdminPanelSideNav"
import { useEffect } from 'react';
import "../../components/AdminPanel/ChartContainer.css"
import { useSelector } from "react-redux";

function AdminDashboard() {
  const bookings = useSelector(state => state.bookings)
  const concerts = useSelector(state => state.concerts)
  const customers = useSelector(state => state.customers)

  useEffect(() => {
    document.title = "Dashboard | Admin"
  }, [])

  return (
    <>
      <AdminPanelHeader />
      <div className="d-flex">
        <AdminPanelSideNav />
        <center className="d-flex flex-column px-1 px-lg-3 mt-5 container-fluid" id="dashboard-container">
          <h1>Admin Dashboard</h1>
          <div className="d-flex justify-content-center flex-wrap my-1 my-lg-5"  >
            <div className="col-sm-3 mx-sm-3 mx-0 my-1 my-sm-0">
              <div className="card bg-success text-light shadow-lg py-0 py-lg-3">
                <div className="card-body">
                  <h4 className="card-title text-uppercase">Bookings</h4>
                  <h1 className="card-text"> 
                    <i className="fa-solid fa-ticket me-2 me-md-3 me-lg-4"></i>
                    {bookings.length}
                  </h1>
                </div>
              </div>
            </div>
            <div className="col-sm-3 mx-sm-3 mx-0 my-1 my-sm-0">
              <div className="card bg-secondary text-light shadow-lg py-0 py-lg-3">
                <div className="card-body">
                  <h4 className="card-title text-uppercase">Concerts</h4>
                  <h1 className="card-text">
                    <i className="fa-solid fa-music me-2 me-md-3 me-lg-4"></i>
                    {concerts.length}
                  </h1>
                </div>
              </div>
            </div>
            <div className="col-sm-3 mx-sm-3 mx-0 my-1 my-sm-0">
              <div className="card bg-primary text-light shadow-lg py-0 py-lg-3">
                <div className="card-body">
                  <h4 className="card-title text-uppercase">Users</h4>
                  <h1 className="card-text">
                    <i className="fa-solid fa-user me-2 me-md-3 me-lg-4"></i>
                    {customers.length}
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </center>
      </div>
    </>
  )
}

export default AdminDashboard