import { useEffect } from "react"
import "./AdminPanel.css"
import avatar from "/avatar.png"
import logo from "/Concert-Craft-Logo-Transparent.png"
import AdminPanelSideNav from "../../components/AdminPanel/AdminPanelSideNav"
import BookingTable from "../../components/AdminPanel/BookingTable"
import ConcertTable from "../../components/AdminPanel/ConcertTable"
import UsersTable from "../../components/AdminPanel/UsersTable"



function AdminPanel() {

  useEffect(() =>{
    document.title = "Admin Dashboard | Concert Craft"
  }, [])

  return (
    <>
      <div className="admin-panel-container">
        <div className="admin-panel-header">
          <div className="logo-container">
            <img src={logo} alt="concert-craft-logo" />
            <h4>Admin Dashboard</h4>
          </div>
          <div className="avatar-container">
            <h4>Welcome Admin</h4>
            <img src={avatar} alt="admin-avatar"/>
          </div>
        </div>
        <div className="admin-panel-body d-flex">
          <AdminPanelSideNav />
          <div className="col-6">
          </div>

            
        </div>
      </div>
    </>
  )
}

export default AdminPanel
