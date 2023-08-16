import React, { useState } from 'react';

function BookingCard ({cardbook:{index, id, title, imageSource, details, tourdates, time, ticket}} ) { //ConcertCard props
  
  const [selectedValue, setSelectedValue] = useState(1);
  
  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const calculateAmount = () => {
    return selectedValue * 3000;
  };
  
  return (
    <>

    
<div className="Schedcardpic card mb-3">
  <div className="row no-gutters">
    <div className="concert-box col-md-4">
      <img src={imageSource} className="card-img" alt="..." />
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h2 className="card-title col-md-8">{title}</h2>
        <p className="card-text">{details}</p>
        <p className="card-text"><small className="text-muted">{tourdates}</small></p>
        <p className="card-text"><i className="fa-solid fa-timer"></i>{time}</p>
        <div className="card-text text-danger"><i className="fa-solid fa-peso-sign"></i>{ticket}</div>
        <div className="inputticket d-flex flex-wrap">
                    <div className="p-2 flex-fill">How many Ticket?<select value={selectedValue} onChange={handleChange}>
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
                        
                  <p className="">Total Amount: <i className="fa-solid fa-peso-sign text-danger">{calculateAmount()}</i></p>

                  <div><button type="button" className="btn btn-dark btn-lg btn-block col-md-12 text-light"><i className="fa-solid fa-ticket"></i>    Book a Concert now!</button>
                  </div>
        
        </div>
      </div>
    </div>
  </div>

    
    
    </>
  )
}

export default BookingCard
