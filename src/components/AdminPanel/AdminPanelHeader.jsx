import avatar from "/avatar.png"
import logo from "/Concert-Craft-Logo-Transparent.png"
import "./AdminPanelHeader.css"

function AdminPanelHeader() {
  return (
    <>
      <div className="admin-panel-header">
        <div className="logo-container">
          <img src={logo} alt="concert-craft-logo" />
          <h4>Admin Dashboard</h4>
        </div>
        <div className="avatar-container">
          <h4 className="d-none d-md-inline">Welcome Admin</h4>
          <img src={avatar} className="d-none d-md-inline" alt="admin-avatar"/>
        </div>
      </div>
    </>
  )
}

export default AdminPanelHeader
