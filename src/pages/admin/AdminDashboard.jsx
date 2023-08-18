import AdminPanelHeader from "../../components/AdminPanel/AdminPanelHeader"
import AdminPanelSideNav from "../../components/AdminPanel/AdminPanelSideNav"
import { useEffect } from 'react';
import NewUserChart from "../../components/AdminPanel/NewUserChart";
import BookingsChart from "../../components/AdminPanel/BookingsChart";
import "../../components/AdminPanel/ChartContainer.css"

function AdminDashboard() {

  useEffect(() => {
    document.title = "Dashboard | Admin"
  }, [])

  return (
    <>
      <AdminPanelHeader />
      <div className="d-flex">
        <AdminPanelSideNav />
        <center className="d-flex flex-column px-1 px-lg-3 container-fluid" id="dashboard-container">
          <h1>Admin Dashboard</h1>
          <div className="d-flex justify-content-center flex-wrap my-1 my-lg-5"  >
            <div className="col-sm-3 mx-sm-3 mx-0 my-1 my-sm-0">
              <div className="card bg-success text-light shadow-lg py-0 py-lg-3">
                <div className="card-body">
                  <h4 className="card-title text-uppercase">Bookings</h4>
                  <h1 className="card-text"> <i className="fa-solid fa-ticket me-2 me-md-3 me-lg-4"></i>1203</h1>
                </div>
              </div>
            </div>
            <div className="col-sm-3 mx-sm-3 mx-0 my-1 my-sm-0">
              <div className="card bg-secondary text-light shadow-lg py-0 py-lg-3">
                <div className="card-body">
                  <h4 className="card-title text-uppercase">Concerts</h4>
                  <h1 className="card-text"><i className="fa-solid fa-music me-2 me-md-3 me-lg-4"></i>63</h1>
                </div>
              </div>
            </div>
            <div className="col-sm-3 mx-sm-3 mx-0 my-1 my-sm-0">
              <div className="card bg-primary text-light shadow-lg py-0 py-lg-3">
                <div className="card-body">
                  <h4 className="card-title text-uppercase">Users</h4>
                  <h1 className="card-text"><i className="fa-solid fa-user me-2 me-md-3 me-lg-4"></i>543</h1>
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex flex-reverse flex-wrap justify-content-center mt-lg-5 mt-0">
            <BookingsChart />
            <NewUserChart />
          </div>
        </center>
      </div>
    </>
  )
}

export default AdminDashboard