import BookingPage from "../../pages/admin/BookingPage"
import "./ConcertCard.css"

function ConcertCard ({concertCard:{index, id, title, imageSource}} ) { //ConcertCard props
  
  return (
    <>
      <div key={`concert-${index}`} className="concert-box col-6 col-lg-2">
        <img 
          src={imageSource} 
          alt={title} 
          className="d-none d-md-block"
        />
        <a href="#" data-bs-toggle="modal" data-bs-target="#bookingModal">
          <img 
            src={imageSource} 
            alt={title} 
            className="d-block d-md-none"
          />
        </a>
        <div className="concert-info d-none d-md-block">
          <h3>{title}</h3>
          <a href="#" data-bs-toggle="modal" data-bs-target="#bookingModal">
            <i className="fa-solid fa-ticket"></i> 
            Book a seat
          </a>
          <BookingPage />
        </div>
      </div>
    </>
  )
}

export default ConcertCard
