import axios from 'axios';
import { useFormik } from 'formik';
import React, { useEffect, useState } from 'react';
import * as Yup from 'yup'


const seatOptions = [
  { value: "VIP Seat", label: "VIP Seat" },
  { value: "Premium Seat", label: "Premium Seat" },
  { value: "Regular Seat", label: "Regular Seat" },
];

function BookingCard ({id}) { //ConcertCard props

  const formik = useFormik({
    initialValues: {
      ticketItem: '',
      seatValue: seatOptions[0].value,
    },

    validationSchema: Yup.object({
      ticketItem: Yup.number().integer("Must be a number").positive("Must be positive number").required("Input number of tickets"),
      seatValue: Yup.string().required("Seat Position is required"),
    }),

    onSubmit: (value) => {
      console.log(value)
    }
  })



  const [concert, setConcert] = useState({
    title: '',
    posterImageUrl: '',
    description: '',
    eventDate: '',
    eventPlace: '',
    ticketPrice: '',
  })

  const fetchConcertInfo = async () => {
    const res = await axios(`http://localhost:8000/api/v1/concerts/${id}`)
    const concertInfo = res.data.data
    // console.log(concertInfo)
    const concertObj = {
      title: concertInfo.title,
      posterImageUrl: concertInfo.posterImageUrl,
      description: concertInfo.description,
      eventDate: concertInfo.eventDate,
      eventPlace: concertInfo.eventPlace,
      ticketPrice: concertInfo.ticketPrice,
    }

    setConcert(concertObj)
  }

  const totalAmount = () => {
    return formik.values.ticketItem * concert.ticketPrice
  }

  useEffect(() => {
    fetchConcertInfo();
    totalAmount();
  }, [])
  
  return (
    <>
      <div className="card w-100 shadow-lg">
        <div className="row no-gutters">
          <div className="col-md-4">
            <img src={concert.posterImageUrl} className="img-fluid rounded border border-black w-100" alt={concert.title} />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h2 className="card-title col-md-12">{concert.title}</h2>
              <p className="card-text">{concert.description}</p>
              <div className="card-text d-flex flex-column gap-1 mb-3">
                <small className="text-muted">
                <i className="fa-solid fa-location-dot me-1"></i>
                  Place:<span className="ms-1">
                    {concert.eventPlace}</span></small>
                <small className="text-muted">
                <i className="fa-regular fa-calendar me-1"></i>
                  Date: <span className="ms-1">
                    {concert.eventDate.split("-")[0]}</span></small>
                <small className="text-muted">
                <i className="fa-regular fa-clock me-1"></i>
                  Time: <span className="ms-1">
                    {concert.eventDate.split("-")[1]}</span></small>
                <h5 className="card-text text-danger mt-2">
                  <span className='text-dark me-2'>
                    Ticket Price: </span><i className="fa-solid fa-peso-sign me-1"></i>
                    {concert.ticketPrice}</h5>
              </div>
              <form onSubmit={formik.handleSubmit} noValidate>
                <div className="d-flex mb-2 col-md-6 column">
                  <label htmlFor="ticketItem" className='form-label me-3'>Number of Tickets:</label>
                  <div className='row col'>
                  <input 
                    type="number"
                    name='ticketItem' 
                    className={
                        formik.errors.ticketItem && formik.touched.ticketItem 
                          ? 
                          "is-invalid form-control" 
                          : 
                          "form-control"
                      }  
                    id="ticketItem"
                    value={formik.values.ticketItem}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    />
                    {
                      formik.errors.ticketItem && formik.touched.ticketItem 
                      ? 
                      <span className="text-danger">{formik.errors.ticketItem}</span> 
                      : 
                      null
                    }
                  </div>
                </div>
                <div className='mb-2'>
                  <label htmlFor="seatPosition" className='me-2'>Select an option:</label>
                  <select
                    name="seatPosition"
                    value={formik.values.seatValue}
                    onBlur={formik.handleBlur}
                    onChange={(e) => {
                      formik.setFieldValue("seatValue", e.target.value)
                    }}
                  >
                    {seatOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
                <p>You selected: {formik.values.seatValue}</p>
                <h4 className="pb-1">Total Amount: <i className="fa-solid fa-peso-sign text-danger me-1"></i><span className='text-danger'>{totalAmount()}</span></h4>
                <button type="submit" className="btn btn-dark btn-lg btn-block col-md-12 text-light mt-2"><i className="fa-solid fa-ticket me-2"></i> Book your tickets</button>
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
