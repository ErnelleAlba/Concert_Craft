import ConcertCard from "./ConcertCard"
import { Link } from "react-router-dom"
import "./ConcertShowHome.css"

function ConcertShowHome() {
  const concertInfo = [
    {
      id: 1,
      title: "Mania the ABBA Tribute",
      imageSource: "https://images1.smtickets.com/images/portrait_07062023161535.jpg",
    },
    {
      id: 2,
      title: "Moira Dela Torre Live in Davao",
      imageSource: "https://images1.smtickets.com/images/portrait_16052023123612.jpg",
    },
    {
      id: 3,
      title: "Anson Seabra The Neverland Tour",
      imageSource: "https://images1.smtickets.com/images/portrait_20072023131119.jpg",
    },
    {
      id: 4,
      title: "LAUV The Between Albums Tour",
      imageSource: "https://images1.smtickets.com/images/portrait_03052023134242.jpg",
    },
    {
      id: 5,
      title: "Post Malone World Tour",
      imageSource: "https://images1.smtickets.com/images/portrait_11072023155933.jpg",
    },
    {
      id: 6,
      title: "Neck Deep Live in Manila 2023",
      imageSource: "https://images1.smtickets.com/images/portrait_19072023152507.jpg",
    },
  ]

  const concertCard = concertInfo.map(
    (concertCard, index) => <ConcertCard key={index} concertCard={concertCard} /> //ConcertCard props
  );

  return (
    <>
      <div id="home-section-1" className="concert-show-container">
        <h1>Upcoming Concert</h1>
        <h3>Book your tickets now</h3>
        <div className="concerts-container d-flex flex-wrap">
          {concertCard}
        </div>
        <Link to="./meal-gallery" className="view-more-btn">View More<i className="fa-solid fa-angle-right ms-2"></i></Link>
      </div>
    </>
  )
}

export default ConcertShowHome
