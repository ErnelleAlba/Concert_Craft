import { useEffect } from "react"
import Footer from "../components/Footer"
import NavBar from "../components/NavBar"
import FilterPanel from "../components/SchedulePage/FilterPanel"
import "./ScheduleBooking.css"
import { useSelector } from "react-redux"
import LoadingIcon from "../components/LoadingIcon"
import ConcertScheduleCard from "../components/SchedulePage/ConcertScheduleCard"


function ScheduleBooking() {
  const concertCard = useSelector(state=>state.concerts)
  const isLoading = useSelector(state => state.isLoading)

  useEffect(() => {
    document.title = "Schedules | Concert Craft"
  }, [])

  return (
    <>
      <NavBar />
        <div className="schedule-title-container" >
          <h1>Scheduled Concerts</h1>
          <h3>Upcoming Concerts</h3>
        </div>
        <br />
        <div className="d-flex flex-column">
          <FilterPanel/>
          <div className="container-fluid mb-5 d-flex flex-wrap justify-content-center">
              {
                isLoading 
                  ? 
                <LoadingIcon /> 
                  : 
                  (
                    concertCard.length 
                      ? 
                    concertCard.map((concertCard, index)=> <ConcertScheduleCard 
                      key={index} 
                      concertCard={concertCard}/>) 
                      : 
                    <h1 className="my-5 py-5">No Concert Found</h1>  
                  )
                
              }
          </div>
        </div>
      <Footer/>
    </>
  )
}

export default ScheduleBooking
