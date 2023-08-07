import "./ConcertCard.css"
import "./ConcertShowHome.css"

function ConcertScheduleCard ({concertCord:{index, id, title, imageSource, details, tourdates, time, ticket}} ) { //ConcertCard props
  
  return (
    <>

    
    <div class="Schedcardpic card mb-3 col-md-8" >
        <div class="row g-4">
          <div class="col-md-4">
          <div key={`concert-${index}`} className="concert-box col-6 col-lg-10">
        <img src={imageSource} alt={title} className="d-none d-md-block"/>
        <a href=""><img src={imageSource} alt={title} className="d-block d-md-none"/></a>
        <div className="concert-info d-none d-md-block">
          <h3>{title}</h3>
          <a href="">
          <i className="fa-solid fa-ticket"> Book a seat</i></a>
        </div>
        
      </div>
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">{title}</h5>
              <p class="card-text">{details}</p>
              <p class="card-text"><i class="fa-sharp fa-solid fa-timer">{time}</i></p>
              <p className="card-text text-danger"><i class="fa-solid fa-ticket">{ticket}</i></p>   
            </div>
          </div>
        </div>
      </div>

    
    </>
  )
}

export default ConcertScheduleCard
