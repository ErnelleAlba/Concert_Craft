import { Link } from "react-router-dom"

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
        <p className="card-text">{time}</p>
        <div className=""><p className="card-text">{ticket}
        </p><a href="#" class="btn btn-dark d-flex justify-content-center">Book Now!</a></div>
      </div>
    </div>
  </div>
</div>
    
    </>
  )
}

export default ConcertScheduleCard
