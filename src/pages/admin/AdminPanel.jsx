import { useEffect } from "react"
import "./AdminPanel.css"

function AdminPanel() {

  useEffect(() =>{
    document.title = "Admin | Concert Craft"
  }, [])

  return (
    <>
      <h1>Admin Panel</h1>
    </>
  )
}

export default AdminPanel
