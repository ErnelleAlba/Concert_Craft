import "./ConcertShowHome.css"

function ConcertShowHome() {
  return (
    <>
      <div id="home-section-1" className="concert-show-container">
        <h1>Upcoming Concert</h1>
        <h3>Book your tickets now</h3>
        <div className="concerts-container d-flex flex-wrap">
          <div className="concert-box col-6 col-lg-2">
            <img src="https://www.philippineconcerts.com/wp-content/uploads/2023/03/the-corrs-live-in-manila-2023-3.jpg" alt=" "/>
            <div className="concert-info">
              <h3>Concert Title</h3>
              <a href="">
                <i className="fa-solid fa-ticket"></i> Book a seat</a>
            </div>
          </div>

          <div className="concert-box col-6 col-lg-2">
            <img src="https://www.philippineconcerts.com/wp-content/uploads/2023/03/the-corrs-live-in-manila-2023-3.jpg" alt=" "/>
            <div className="concert-info">
              <h3>Concert Title</h3>
              <a href=""><i className="fa-solid fa-ticket"></i> Book a seat</a>
            </div>
          </div>

          <div className="concert-box col-6 col-lg-2">
            <img src="https://www.philippineconcerts.com/wp-content/uploads/2023/03/the-corrs-live-in-manila-2023-3.jpg" alt=" "/>
            <div className="concert-info">
              <h3>Concert Title</h3>
              <a href=""><i className="fa-solid fa-ticket"></i> Book a seat</a>
            </div>
          </div>

          <div className="concert-box col-6 col-lg-2">
            <img src="https://www.philippineconcerts.com/wp-content/uploads/2023/03/the-corrs-live-in-manila-2023-3.jpg" alt=" "/>
            <div className="concert-info">
              <h3>Concert Title</h3>
              <a href=""><i className="fa-solid fa-ticket"></i> Book a seat</a>
            </div>
          </div>

          <div className="concert-box col-6 col-lg-2">
            <img src="https://www.philippineconcerts.com/wp-content/uploads/2023/03/the-corrs-live-in-manila-2023-3.jpg" alt=" "/>
            <div className="concert-info">
              <h3>Concert Title</h3>
              <a href=""><i className="fa-solid fa-ticket"></i> Book a seat</a>
            </div>
          </div>

          <div className="concert-box col-6 col-lg-2">
            <img src="https://www.philippineconcerts.com/wp-content/uploads/2023/03/the-corrs-live-in-manila-2023-3.jpg" alt=" "/>
            <div className="concert-info">
              <h3>Concert Title</h3>
              <a href=""><i className="fa-solid fa-ticket"></i> Book a seat</a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ConcertShowHome
