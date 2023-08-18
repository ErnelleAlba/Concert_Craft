import BookingPage from "../../pages/BookingPage"
import "./ConcertScheduleCard.css"


function ConcertScheduleCard ({concertScheduleCard:{index, id, title, imageSource, details, tourDates, time, ticket}} ) { //ConcertCard props
  
  return (
    <>
      <div className="card d-flex flex-wrap col-md-5 m-1">
        <div className="row no-gutters ">
          <div className="col-md-5 ">
            <img src={imageSource} className="img-fluid rounded border border-black h-100" alt={title} />
          </div>
          <div className="col-md-7 ps-1 pe-2 py-1">
            <div className="card-body text-start">
              <h2 className="card-title col-md-12">{title}</h2>
              <p className="card-text col-md-12 concert-details-schedule">{details}</p>
              <p className="card-text"><small className="text-muted">{tourDates}</small></p>
              <p className="card-text"><i className="fa-solid fa-timer"></i>{time}</p>
              <div className="card-text text-danger"><i className="fa-solid fa-peso-sign"></i>{ticket}
              <a className="book-now-btn align-content-end" href="#" data-bs-toggle="modal" data-bs-target="#bookingModal" id="booking-btn"><i className="fa-solid fa-ticket me-2"></i>Book Now!</a></div>
              <BookingPage />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ConcertScheduleCard
