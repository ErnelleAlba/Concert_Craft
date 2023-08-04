import "./ConcertCard.css"

function ConcertCard ({concertCard:{id, title, imageSource}} ) { //ConcertCard props
  
  return (
    <>
      <div key={id} className="concert-box col-6 col-lg-2">
        <img src={imageSource} alt={title} className="d-none d-md-block"/>
        <a href=""><img src={imageSource} alt={title} className="d-block d-md-none"/></a>
        <div className="concert-info d-none d-md-block">
          <h3>{title}</h3>
          <a href="">
            <i className="fa-solid fa-ticket"></i> Book a seat</a>
        </div>
      </div>
    </>
  )
}

export default ConcertCard
