import React, { useState } from 'react';

function BookingPage() {


    const [selectedValue, setSelectedValue] = useState(1);
  
    const handleChange = (event) => {
      setSelectedValue(event.target.value);
    };
  
    const calculateAmount = () => {
      return selectedValue * 3000;
    };
  
  
  return (
    <>
    <div className="modal fade bd-example-modal-xl" id="bookingModal" data-bs-keyboard="true" tabIndex="-1" aria-labelledby="loginModal" aria-hidden="true">
        <div className="modal-dialog modal-xl modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header bg-info text-light">
              <h1 className="modal-title fs-4">Booking Form</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body d-flex">
             <div className="row no-gutters d-flex">
                <div className="col-md-4 d-flex" style={{width:"600px"}}>
                  <img src="https://images1.smtickets.com/images/portrait_07062023161535.jpg" className="img-fluid rounded-start d-flex" alt="image" />
                  <div className="col-md-12">
                  <div className="card-body">
                    <h5 className="card-title col-md-8">Mania the ABBA Tribute</h5>
                    <br />
                    <p className="card-text">Mania The ABBA Tribute has continued to tour the globe, enjoying great success, with ticket sales for most venues selling out long before the show hits town. The show has toured internationally in regions as far afield as Venezuela, North America, Tahiti, Mexico, Germany, France, Switzerland, Austria, Holland, Denmark, Sweden, Luxembourg, and many more, making this the world’s most successful touring ABBA show. Join in and enjoy all of your favorites including Mamma Mia, Voulez Vous, Dancing Queen, Winner Takes It All, Super Trouper and many more at this fantastic show.</p>
                    <p className="card-text"><small class="text-muted">Friday 25 Aug 2023, Newport Performing Arts Theater</small></p>
                    <p className="card-text"><i class="fa-solid fa-timer"></i>Event Starts: 8:00 pm</p>
                    <div className="card-text text-danger"><i class="fa-solid fa-peso-sign"></i>3,000
                    <br /></div>
                    <br />

                    
                   
                     <div className="d-flex">
                          <div className="p-2 flex-fill"><h6><i className="fa-solid fa-ticket"></i>  How many Tickets?</h6></div>
                          <div className="p-2 flex-fill"><h6><i class="fa-solid fa-user"></i>    Seat Options</h6></div>
                      </div>
              
                      
                  
                  <div className="inputticket d-flex">
                    <div className="p-2 flex-fill"><select value={selectedValue} onChange={handleChange}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        </select></div>
                        <div className="p-2 flex-fill"></div>
                      <div className="p-2 flex-fill"  style={{padding:"600px"}}><select ><p>            </p>
                          <option value="" disabled selected>Choose Seat</option>
                          <option value="">VIP Seat</option>
                          <option value="2">Premium Seat</option>
                          <option value="3">Regular Seat</option>
                          </select></div>
                        </div>
                        <br />
                        <br />
                        
                  <p className="">Total Amount: <i class="fa-solid fa-peso-sign text-danger">{calculateAmount()}</i></p>

                  <div><button type="button" class="btn btn-dark btn-lg btn-block col-md-12 text-light"><i class="fa-solid fa-ticket"></i>    Book a Concert now!</button></div>







                    
                    </div>
                
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
       </>
  )
}

export default BookingPage