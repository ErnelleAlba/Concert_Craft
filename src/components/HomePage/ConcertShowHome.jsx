import ConcertCard from "./ConcertCard"
import { Link } from "react-router-dom"
import "./ConcertShowHome.css"
import LoadingIcon from "../LoadingIcon";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

function ConcertShowHome() {
  const concerts = useSelector(state => state.concerts)
  const isLoading = useSelector(state => state.isLoading)
  const [concertHome, setConcertHome] = useState([])

  useEffect(() => {
    setConcertHome(concerts.slice(0,6))
  }, [concerts])
  // console.log(concertHome)

  return (
    <>
      <div id="home-section-1" className="concert-show-container">
        <h1>Upcoming Concert</h1>
        <h3>Book your tickets now</h3>
        <div className="concerts-container d-flex flex-wrap justify-content-center">
          {
            isLoading
              ? 
            <LoadingIcon /> 
              : 
              (
                concertHome.length 
                  ? 
                concertHome.map((concert, index) => <ConcertCard
                key={index}
                concert={concert}
                />) 
                  :
                <h1 className="my-5">No Concert Found</h1>  
              )
          }
        </div>
        <Link 
          to="./schedule-booking" 
          className="view-more-btn"
          >View More
          <i className="fa-solid fa-angle-right ms-2"></i>
        </Link>
      </div>
    </>
  )
}

export default ConcertShowHome
