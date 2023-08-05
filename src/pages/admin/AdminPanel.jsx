import { useEffect } from "react"
import "./AdminPanel.css"
import avatar from "../../images/avatar.png"
import logo from "../../images/Concert-Craft-Logo-Transparent.png"


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
      </div>
    </>
  )
}

export default AdminPanel
