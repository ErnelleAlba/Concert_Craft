import { useFormik } from 'formik';
import React, { useState } from 'react';

const options = [
  { id: "option-1", value: 1, label: ' 1', price: 3000 },
  { id: "option-2", value: 2, label: ' 2', price: 3000 },
  { id: "option-3", value: 3, label: ' 3', price: 3000 },
  { id: "option-4", value: 4, label: ' 4', price: 3000 },
  { id: "option-5", value: 5, label: ' 5', price: 3000 },
];

const seatoptions = [
  { value: "VIP Seat", label: "VIP Seat" },
  { value: "Premium Seat", label: "Premium Seat" },
  { value: "Regular Seat", label: "Regular Seat" },
];

function BookingCard ({cardbook:{index, id, title, imageSource, details, tourdates, time, ticket}} ) { //ConcertCard props

  const formik = useFormik({
    initialValues: {
      ticketitem: '',
      seatvalue: seatoptions[0].value,
    },
    onSubmit: (value) => {
      console.log(value)
    }
  })

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
        <form onSubmit={formik.handleSubmit}>
          <div className="inputticket d-flex flex-wrap">
              <p>Number of Tickets</p>
              <div>
              <input 
                type="text" 
                className="" 
                id="ticketitem"
                value={formik.values.ticketitem}
                onChange={formik.handleChange}
                />
              </div>  
              <br />
            </div>
            <div>
              <label htmlFor="select">Select an option:</label>
              <select
                name="select"
                value={formik.values.seatvalue}
                onChange={(e) => {
                  formik.setFieldValue("seatvalue", e.target.value)
                }}
              >
                <option value="">--Please choose an option--</option>
                {seatoptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              <p>You selected: {formik.values.seatvalue}</p>
            </div>
            <p className="">Total Amount: <i className="fa-solid fa-peso-sign text-danger"></i></p>
            <button type="submit" className="btn btn-dark btn-lg btn-block col-md-12 text-light"><i className="fa-solid fa-ticket"></i>    Book a Concert now!</button>
          </form>
          <br />
          
            
        
        </div>
      </div>
    </div>
  </div>
          
    
    
    </>
  )
}

export default BookingCard
