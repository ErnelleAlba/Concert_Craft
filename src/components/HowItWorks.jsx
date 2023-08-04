import "./HowItWorks.css"

function HowItWorks() {
  return (
    <>
      <div id="home-section-2" className="services-section">
          <h1>How it works</h1>
          <h3>3 Simple steps to craft your concert experience!</h3>
          <div className="services-container d-flex flex-wrap ">
              <div className="service-item col-md-4 px-1">
                  <div className="service-item-icon">
                    <i className="fa-solid fa-music fa-2xl"></i>
                  </div>
                  <h2>1. Choose a concert event</h2>
                  <p>Choose the concert of your favorite artist that you want to attend.</p>
              </div>
              <div className="service-item col-md-4 px-1">
                  <div className="service-item-icon">
                    <i className="fa-solid fa-ticket fa-2xl"></i>
                  </div>
                  <h2>2. Pick your seats & Book your tickets</h2>
                  <p>Pick your seat position & book the number of tickets you want to buy.</p>
              </div>
              <div className="service-item col-md-4 px-1">
                  <div className="service-item-icon">
                    <i className="fa-solid fa-credit-card fa-2xl"></i>
                  </div>
                  <h2>3. Pay for your tickets & Enjoy the concert</h2>
                  <p>Pay for your Tickets & Enjoy the Concert.</p>
              </div>
              <div className="service-item"></div>
              <div className="service-item"></div>
          </div>
      </div>
    </>
  )
}

export default HowItWorks
