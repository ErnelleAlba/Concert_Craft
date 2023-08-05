import { useEffect } from "react"
import "./AdminPanel.css"

function AdminPanel() {

  useEffect(() =>{
    document.title = "Admin Dashboard | Concert Craft"
  }, [])

  return (
    <>
      <div className="admin-panel-container">
        <h1>Admin Panel</h1>
      </div>
    </>
  )
}

export default AdminPanel
