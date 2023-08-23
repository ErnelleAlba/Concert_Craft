import { useEffect } from "react"
import Footer from "../components/Footer"
import NavBar from "../components/NavBar"
import FilterPanel from "../components/SchedulePage/FilterPanel"
import "./ScheduleBooking.css"
import { useDispatch, useSelector } from "react-redux"
import LoadingIcon from "../components/LoadingIcon"
import ConcertScheduleCard from "../components/SchedulePage/ConcertScheduleCard"
import { markLoading, unmarkLoading } from "../store/isLoadingReducers"
import { setConcerts } from "../store/concertsReducers"
import axios from "axios"


function ScheduleBooking() {
  const concertCard = useSelector(state=>state.concerts)
  const isLoading = useSelector(state => state.isLoading)
  const dispatch = useDispatch();

  const handleOnChange = async (e) => {
    dispatch(markLoading())

    const resTitle = await axios(`http://localhost:8000/api/v1/concerts?title=${e.target.value}`)
    
      dispatch(setConcerts(resTitle.data.data.map(
      concert => {
        return {
          id: concert.id,
          title: concert.title,
          posterImageUrl: concert.posterImageUrl,
          description: concert.description,
          eventPlace: concert.eventPlace,
          eventDate: concert.eventDate,
          ticketPrice: concert.ticketPrice,
        }
      }
    )))

    dispatch(unmarkLoading())
    // console.log(e.target.value)
  }

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
          <div className="d-flex justify-content-center align-self-end col-10 col-lg-2 col-md-4 col-sm-5 me-5 mb-2 bg-dark text-light px-2 py-1 rounded">
            <label htmlFor="search-concert-bar" className="me-2 pt-2 form-label">Search: </label>
            <input type="text"  id="search-concert-bar" className="form-control" onChange={handleOnChange} />
          </div>
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
