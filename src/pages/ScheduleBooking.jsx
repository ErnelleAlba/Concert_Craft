import ConcertSchedule from "../components/HomePage/ConcertSchedule"
import Footer from "../components/Footer"
import NavBar from "../components/NavBar"
import FilterPanel from "./FilterPanel"

function ScheduleBooking() {



  return (
    <>
    <NavBar />
      <div id="home-section-1" className="concert-show-container">
        <h1>Scheduled Concerts</h1>
        <h3>Upcoming Concerts</h3>
        
      </div>
      
      <br />
      <div className="concertskier d-flex flex-wrap">
        <ConcertSchedule />
        </div>
        <FilterPanel />
    <Footer/>
    </>
  )
}

export default ScheduleBooking
