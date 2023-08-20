import BookingPage from "../../pages/BookingPage"
import "./ConcertScheduleCard.css"



function ConcertScheduleCard ({concertCard:{id, title, posterImageUrl, description, eventDate, eventPlace, ticketPrice}} ) { //ConcertCard props

  return (
    <>
      <div className="card shadow d-flex flex-column col-md-5 m-2">
        <div className="row no-gutters ">
          <div className="col-md-5 ">
            <img src={posterImageUrl} className="img-fluid rounded border border-black" alt={title} />
          </div>
          <div className="col-md-7 ps-3 ps-lg-1 pe-2 py-1 pb-3 pb-lg-0">
            <div className="card-body text-start">
              <h2 className="card-title col-md-12">{title}</h2>
              <p className="card-text col-md-12 concert-details-schedule">{description}</p>
              <p className="card-text">
                <small className="text-muted">
                <i className="fa-solid fa-location-dot me-1"></i>
                  Place:<span className="ms-1">
                    {eventPlace}</span></small></p>
              <p className="card-text">
                <small className="text-muted">
                <i className="fa-regular fa-calendar me-1"></i>
                  Date: <span className="ms-1">
                    {eventDate.split("-")[0]}</span></small></p>
              <p className="card-text">
                <small className="text-muted">
                <i className="fa-regular fa-clock me-1"></i>
                  Time: <span className="ms-1">
                    {eventDate.split("-")[1]}</span></small></p>
              <div className="card-text text-danger"><i className="fa-solid fa-peso-sign me-1"></i>{ticketPrice}
              <a className="book-now-btn align-content-end" data-bs-toggle="modal" data-bs-target={`#bookingModal-${id}`} id="booking-btn"><i className="fa-solid fa-ticket me-2"></i>Book Now!</a></div>
              <BookingPage key={id} id={id} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ConcertScheduleCard
