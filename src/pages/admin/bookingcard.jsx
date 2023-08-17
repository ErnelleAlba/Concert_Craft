import { useFormik } from 'formik';
import React, { useState } from 'react';
import TicketTable from "./TicketTable"
import SeatTable from "./SeatTable"

const options = [
  { value: 1, label: ' 1', price: 3000 },
  { value: 2, label: ' 2', price: 3000 },
  { value: 3, label: ' 3', price: 3000 },
  { value: 4, label: ' 4', price: 3000 },
  { value: 5, label: ' 5', price: 3000 },
];
function BookingCard ({cardbook:{index, id, title, imageSource, details, tourdates, time, ticket}} ) { //ConcertCard props
  

  const formik = useFormik({
    initialValues: {
      ticketitem: '',
      seatvalue: ''
    },
    onSubmit: (value) => {
      console.log(value)
    }
  })

  const [selectedOption, setSelectedOption] = useState (options [0]);

  const handleOptionChange = (e) => {
    setSelectedOption (options.find (option => option.value === parseInt (e.target.value)));
  };

  const calculateAmount = () => {
    return selectedOption.price * selectedOption.value;
  }


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
        <form onSubmit={formik.handleSubmit} />
        <p>Number of Tickets</p>
        <div className="inputticket d-flex flex-wrap">
        <div>
      <select onChange={handleOptionChange}>
        {options.map ((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
                        </div>
                        <SeatTable />
                  <p className="">Total Amount: <i className="fa-solid fa-peso-sign text-danger">{calculateAmount ()}</i></p>

                  <div><button type="submit" className="btn btn-dark btn-lg btn-block col-md-12 text-light"><i className="fa-solid fa-ticket"></i>    Book a Concert now!</button>
                  </div>
        
                  </div>
                  </div>
                </div>
              </div>

    
    
    </>
  )
}

export default BookingCard
