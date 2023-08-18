import { useEffect } from "react"
import Footer from "../components/Footer"
import NavBar from "../components/NavBar"
import ConcertSchedule from "../components/SchedulePage/ConcertSchedule"
import FilterPanel from "../components/SchedulePage/FilterPanel"
import "./ScheduleBooking.css"

function ScheduleBooking() {

  useEffect(() => {
    document.title = "Schedules | Concert Craft"
  }, [])

  return (
    <>
      <NavBar />
        <div className="container-fluid schedule-title-container" >
          <h1>Scheduled Concerts</h1>
          <h3>Upcoming Concerts</h3>
        </div>
        <br />
        <div className="d-flex row">
          <FilterPanel/>
          <ConcertSchedule />
        </div>
      <Footer/>
    </>
  )
}

export default ScheduleBooking
