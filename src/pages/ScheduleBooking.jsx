import ConcertSchedule from "../components/HomePage/ConcertSchedule"
import Footer from "../components/Footer"
import NavBar from "../components/NavBar"
import "./ScheduleBooking.css"

function ScheduleBooking() {


  return (
    <>
    <NavBar />
      <div id="home-section-1" className="schedule-title-container mb-5">
        <h1>Scheduled Concerts</h1>
        <h3>Upcoming Concerts</h3>
      </div>
      <div className="border filter-container">
        <ul className="nav justify-content-center py-3 py-lg-2 gap-2">
          <li className="nav-item" id="filter-month">
            <a className="nav-link" href="#">January</a>
          </li>
          <li className="nav-item" id="filter-month">
            <a className="nav-link" href="#">February</a>
          </li>
          <li className="nav-item" id="filter-month">
            <a className="nav-link" href="#">March</a>
          </li>
          <li className="nav-item" id="filter-month">
            <a className="nav-link" href="#">April</a>
          </li>
          <li className="nav-item" id="filter-month">
            <a className="nav-link" href="#">May</a>
          </li>
          <li className="nav-item" id="filter-month">
            <a className="nav-link" href="#">June</a>
          </li>
          <li className="nav-item" id="filter-month">
            <a className="nav-link" href="#">July</a>
          </li>
          <li className="nav-item" id="filter-month">
            <a className="nav-link" href="#">August</a>
          </li>
          <li className="nav-item" id="filter-month">
            <a className="nav-link" href="#">September</a>
          </li>
          <li className="nav-item" id="filter-month">
            <a className="nav-link" href="#">October</a>
          </li>
          <li className="nav-item" id="filter-month">
            <a className="nav-link" href="#">November</a>
          </li>
          <li className="nav-item" id="filter-month">
            <a className="nav-link" href="#">December</a>
          </li>
        </ul>
      </div>
      <br />
      <ConcertSchedule />
    <Footer/>
    </>
  )
}

export default ScheduleBooking
