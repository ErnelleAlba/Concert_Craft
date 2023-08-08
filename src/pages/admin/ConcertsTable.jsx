import AdminPanelHeader from "../../components/AdminPanel/AdminPanelHeader"
import AdminPanelSideNav from "../../components/AdminPanel/AdminPanelSideNav"

function ConcertsTable() {
  return (
    <>
      <AdminPanelHeader />
      <div className="d-flex">
        <AdminPanelSideNav />
        <h1>Concert Table</h1>
      </div>

    </>
  )
}

export default ConcertsTable
