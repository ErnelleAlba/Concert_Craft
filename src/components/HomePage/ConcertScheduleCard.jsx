import { Link } from "react-router-dom"
import BookingPage from "../../pages/admin/BookingPage"

function ConcertScheduleCard ({concertCord:{index, id, title, imageSource, details, tourdates, time, ticket}} ) { //ConcertCard props
  
  return (
    <>

    
<div className="Schedcardpic card mb-3">
  <div className="row no-gutters">
    <div className="col-md-4">
      <img src={imageSource} class="card-img" alt="..." />
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title col-md-4">{title}</h5>
        <p className="card-text">{details}</p>
        <p className="card-text"><small class="text-muted">{tourdates}</small></p>
        <p className="card-text"><i class="fa-solid fa-timer"></i>{time}</p>
        <div className="card-text text-danger"><i class="fa-solid fa-peso-sign"></i>{ticket}
        <a className="view-more-btn align-content-end" href="#" data-bs-toggle="modal" data-bs-target="#bookingModal" id="booking-btn"><i class="fa-solid fa-ticket"></i>Book Now!</a></div>
      <BookingPage />
      </div>
    </div>
  </div>
</div>
    
    </>
  )
}

export default ConcertScheduleCard
