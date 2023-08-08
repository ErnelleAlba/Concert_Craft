import AdminPanelHeader from "../../components/AdminPanel/AdminPanelHeader"
import AdminPanelSideNav from "../../components/AdminPanel/AdminPanelSideNav"

function BookingsTable() {
  return (
    <>
      <AdminPanelHeader />
      <div className="d-flex">
        <AdminPanelSideNav />
        <h1>Booking Table</h1>
      </div>
      
    </>
  )
}

export default BookingsTable
