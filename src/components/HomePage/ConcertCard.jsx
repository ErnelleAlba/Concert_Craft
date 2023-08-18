import BookingPage from "../../pages/BookingPage"
import "./ConcertCard.css"

function ConcertCard ({concertCard:{index, id, title, imageSource}} ) { //ConcertCard props
  
  return (
    <>
      <div key={`concert-${index}`} className="concert-box col-6 col-xxl-2 col-md-4">
        <img 
          src={imageSource} 
          alt={title} 
          className="d-none d-lg-block"
        />
        <a href="#" data-bs-toggle="modal" data-bs-target="#bookingModal">
          <img 
            src={imageSource} 
            alt={title} 
            className="d-block d-lg-none"
          />
        </a>
        <div className="concert-info d-none d-lg-block">
          <h3>{title}</h3>
          <a href="#" data-bs-toggle="modal" data-bs-target="#bookingModal" id="booking-btn">
            <i className="fa-solid fa-ticket me-2"></i> 
            Book a seat
          </a>
          
        </div>
        <BookingPage />
      </div>
    </>
  )
}

export default ConcertCard
