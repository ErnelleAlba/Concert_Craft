import { useSelector } from "react-redux"
import BookingPage from "../../pages/BookingPage"
import "./ConcertCard.css"

function ConcertCard ({concert: {id, title, posterImageUrl} }) { //ConcertCard props
  const loggedInUser = useSelector(state => state.loggedInUser)

  return (
    <>
      <div className="concert-box col-6 col-xxl-2 col-md-4">
        <img 
          src={posterImageUrl} 
          alt={title} 
          className="d-none d-lg-block shadow"
        />
        <a href="#" className="shadow-lg" data-bs-toggle="modal" data-bs-target={`#bookingModal-${id}`}>
          <img 
            src={posterImageUrl} 
            alt={title} 
            className="d-block d-lg-none"
          />
        </a>
        <div className="concert-info d-none d-lg-block">
          <h3>{title}</h3>
          {
            loggedInUser 
            ?           
            <a id="booking-btn"
            data-bs-toggle="modal" 
            data-bs-target={`#bookingModal-${id}`}
            role="button">
              <i className="fa-solid fa-ticket me-2"></i> 
              Book a seat
            </a>
            :
            <a id="booking-btn" 
            data-bs-toggle="modal" 
            data-bs-target="#loginModal" 
            role="button">
              <i className="fa-solid fa-ticket me-2"></i> 
              Book a seat
            </a> 
          }
        </div>
        <BookingPage key={id} id={id} />
      </div>
    </>
  )
}

export default ConcertCard
