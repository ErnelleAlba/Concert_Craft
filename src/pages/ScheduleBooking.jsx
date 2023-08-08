import { useEffect } from "react"
import ConcertSchedule from "../components/HomePage/ConcertSchedule"
import Footer from "../components/Footer"
import NavBar from "../components/NavBar"
import "./ScheduleBooking.css"

function ScheduleBooking() {

  useEffect(() => {
    document.title = "Schedules | Concert Craft"
  }, [])

  function categorizeMonth(month) {
    const concerts = [
      { month: "January", concert: "New Year's Concert" },
      { month: "February", concert: "Valentine's Concert" },
      { month: "March", concert: "St. Patrick's Day Concert" },
      { month: "April", concert: "Easter Concert" },
      { month: "May", concert: "Mother's Day Concert" },
      { month: "June", concert: "Father's Day Concert" },
      { month: "July", concert: "Independence Day Concert" },
      { month: "August", concert: "Summer Concert" },
      { month: "September", concert: "Back to School Concert" },
      { month: "October", concert: "Halloween Concert" },
      { month: "November", concert: "Thanksgiving Concert" },
      { month: "December", concert: "Christmas Concert" }
    ];
    const result = concerts.filter(concert => concert.month === month);
    return result.length > 0 ? result[0].concert : `No concerts in ${month}`;
  }
  
  console.log(categorizeMonth("December"));
  

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
