
import { useEffect } from "react"
import AdminPanelHeader from "../../components/AdminPanel/AdminPanelHeader"
import AdminPanelSideNav from "../../components/AdminPanel/AdminPanelSideNav"

function BookingsTable() {



  useEffect(() => {
    document.title = "Bookings Table | Admin"
}, [])

  return (
    <>
      <AdminPanelHeader />
      <div className="d-flex">
        <AdminPanelSideNav />
        <center className="pt-3 users-table-container">
          <h1 className="text-uppercase fw-bold mb-2">Bookings Table</h1>
          <div className="w-100 mt-2">
            <table id="bookings-table" 
            className="table table-bordered border border-dark table-striped table-hover" 
            style={{width:"100%"}}>
              <thead className="table-dark border-light" >
                <tr>
                  <th>ID</th>
                  <th>Customer ID</th>
                  <th>Concert ID</th>
                  <th>Seat Position</th>
                  <th>No. of Tickets</th>
                  <th>Total Price</th>
                  {/* <th>Action</th> */}
                </tr>
              </thead>
              <tbody className="table-light border-dark">
              </tbody>
              <tfoot className="table-dark border-light">
                <tr>
                  <th>ID</th>
                  <th>Customer ID</th>
                  <th>Concert ID</th>
                  <th>Seat Position</th>
                  <th>No. of Tickets</th>
                  <th>Total Price</th>
                  {/* <th>Action</th> */}
                </tr>
              </tfoot>
            </table>
          </div>
        </center>
      </div>
      
    </>
  )
}

export default BookingsTable
