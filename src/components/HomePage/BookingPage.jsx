import "./ConcertCard.css"
import "./ConcertShowHome.css"

function BookingPage () {
  
  return (
    <>

<div class="booking-panel">
        <div class="booking-panel-section booking-panel-section1">
            <h1>Book a Ticket</h1>
        </div>
        <div className="booking-panel-section booking-panel-section2" onclick="window.history.go(-1); return false;">
            <i class="fas fa-2x fa-times"></i>
        </div>
        <div class="booking-panel-section booking-panel-section3">
            <div class="movie-box">
               <img src={imageSource} alt="" />
                    
            </div>
        </div>
        <div class="booking-panel-section booking-panel-section4">
            <div class="title">{title}</div>
            <div class="movie-information">
                <table>
                    <tr>
                        <td>GENGRE</td>
                        <td>{details}</td>
                    </tr>
                    <tr>
                        <td>DURATION</td>
                        <td>{tourdates}</td>
                    </tr>
                    <tr>
                        <td>RELEASE DATE</td>
                        <td>{time}</td>
                    </tr>
                    <tr>
                        <td>DIRECTOR</td>
                        <td>ads</td>
                    </tr>
                    <tr>
                        <td>ACTORS</td>
                        <td>{ticket}</td>
                    </tr>
                </table>
            </div>
            </div>
            </div>
            <form class="row g-3">
  <div class="col-md-6">
    <label for="inputEmail4" class="form-label">Email</label>
    <input type="email" class="form-control" id="inputEmail4" />
  </div>
  <div class="col-md-6">
    <label for="inputPassword4" class="form-label">Password</label>
    <input type="password" class="form-control" id="inputPassword4" />
  </div>
  <div class="col-12">
    <label for="inputAddress" class="form-label">Address</label>
    <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" />
  </div>
  <div class="col-12">
    <label for="inputAddress2" class="form-label">Address 2</label>
    <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
  </div>
  <div class="col-md-6">
    <label for="inputCity" class="form-label">City</label>
    <input type="text" class="form-control" id="inputCity" />
  </div>
  <div class="col-md-4">
    <label for="inputState" class="form-label">State</label>
    <select id="inputState" class="form-select">
      <option selected>Choose...</option>
      <option>...</option>
    </select>
  </div>
  <div class="col-md-2">
    <label for="inputZip" class="form-label">Zip</label>
    <input type="text" class="form-control" id="inputZip" />
  </div>
  <div class="col-12">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="gridCheck" />
      <label class="form-check-label" for="gridCheck">
        Check me out
      </label>
    </div>
  </div>
  <div class="col-12">
    <button type="submit" class="btn btn-primary">Sign in</button>
  </div>
</form>
            
    </>
   ) 
  }
  


export default BookingPage
