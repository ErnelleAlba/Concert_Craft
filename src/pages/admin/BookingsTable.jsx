import { useEffect } from "react"
import AdminPanelHeader from "../../components/AdminPanel/AdminPanelHeader"
import AdminPanelSideNav from "../../components/AdminPanel/AdminPanelSideNav"

function BookingsTable() {

  useEffect(() => {
    document.title = "Booking Table"
}, [])

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
