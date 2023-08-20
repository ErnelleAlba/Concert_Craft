import BookingPage from "../../pages/BookingPage"
import "./ConcertCard.css"

function ConcertCard ({concert:{id, title, posterImageUrl}} ) { //ConcertCard props
  
  return (
    <>
      <div key={`concert-${id}`} className="concert-box col-6 col-xxl-2 col-md-4">
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
          <a href="#" data-bs-toggle="modal" data-bs-target={`#bookingModal-${id}`} id="booking-btn">
            <i className="fa-solid fa-ticket me-2"></i> 
            Book a seat
          </a>
        </div>
        <BookingPage key={id} id={id} />
      </div>
    </>
  )
}

export default ConcertCard
