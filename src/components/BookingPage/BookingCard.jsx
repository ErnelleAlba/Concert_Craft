import axios from 'axios';
import { Alert, Toast } from 'bootstrap';
import { useFormik } from 'formik';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import * as Yup from 'yup'


const seatOptions = [
  { value: "vip_seat", name: "VIP Seat" },
  { value: "premium_seat", name: "Premium Seat" },
  { value: "regular_seat", name: "Regular Seat" },
];

function BookingCard ({id}) { //ConcertCard props

  const token = useSelector(state => state.token)

  const totalAmount = () => {
    return formik.values.ticketItem * concert.ticketPrice
  }


  const formik = useFormik({
    initialValues: {
      ticketItem: '',
      seatValue: seatOptions[0].value,
    },

    validationSchema: Yup.object({
      ticketItem: Yup.number().integer("Must be a number").positive("Must be positive number").required("Input number of tickets"),
      seatValue: Yup.string().required("Seat Position is required"),
    }),

    onSubmit: async (value) => {
      console.log(value)

      try {
        const res = await axios.post('http://localhost:8000/api/v1/bookings',
          {
            concertId: id,
            seatPosition: value.seatValue,
            noOfTickets: value.ticketItem,
            totalPrice: totalAmount(),
          },
          {
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
              'Authorization': `Bearer ${token}`
            }
          }
        )
        console.log(res)
        // console.log(value.seatValue)
        if (res.status === 201) {
          alert('Your booking is successful check the email we send to you for details. Thank you for booking!!')
        }
      } catch (err) {
        alert('Your booking failed. Try again.')
      }
      

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
      posterImageUrl: concertInfo.posterImageUrl.replace('storage','http://localhost:8000/storage'),
      description: concertInfo.description,
      eventDate: concertInfo.eventDate,
      eventPlace: concertInfo.eventPlace,
      ticketPrice: concertInfo.ticketPrice,
    }

    setConcert(concertObj)
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
              <form onSubmit={formik.handleSubmit} autoComplete='off' noValidate>
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
                    id={`ticketItem-${id}`}
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
                    {seatOptions.map((option) => 
                      <option key={option.value} value={option.value}>
                        {option.name}
                      </option>
                    )}
                  </select>
                </div>
                <p>You selected: {formik.values.seatValue}</p>
                <h4 className="pb-1">Total Amount: <i className="fa-solid fa-peso-sign text-danger me-1"></i><span className='text-danger'>{totalAmount()}</span></h4>
                <button type="submit" className="btn btn-dark btn-lg btn-block col-md-12 text-light mt-2"><i className="fa-solid fa-ticket me-2"></i> Book your tickets</button>
              </form>
              <div className="toast-container position-fixed top-0 end-0 p-3 mt-5 m">
                <div id="bookingToast" className="toast align-items-center text-bg-success border-0" role="alert" aria-live="assertive" aria-atomic="true">
                  <div className="d-flex">
                    <div className="toast-body">
                      Tickets successfully booked !
                    </div>
                    <button type="button" className="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
                  </div>
                </div>
              </div>
              <br />
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default BookingCard
