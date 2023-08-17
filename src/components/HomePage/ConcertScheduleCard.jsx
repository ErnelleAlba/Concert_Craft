import BookingPage from "../../pages/admin/BookingPage"
import "./concertScheduleCardCSS.css"


function ConcertScheduleCard ({concertCord:{index, id, title, imageSource, details, tourdates, time, ticket}} ) { //ConcertCard props
  
  return (
    <>

    
<div className="Schedcardpic card px-4 mb-3 d-flex flex-wrap col-md-5">
  <div className="row no-gutters gx-5">
    <div className="concert-box col-md-4">
      <img src={imageSource} class="card-img" alt="..." />
    </div>
    <div className="col-md-8 p-3">
      <div className="card-body">
        <h2 className="card-title col-md-12">{title}</h2>
        <p className="card-text col-md-12">{details}</p>
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
