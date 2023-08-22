
import { useEffect } from "react"
import AdminPanelHeader from "../../components/AdminPanel/AdminPanelHeader"
import AdminPanelSideNav from "../../components/AdminPanel/AdminPanelSideNav"
import { useDispatch, useSelector } from "react-redux"
import LoadingIcon from "../../components/LoadingIcon"
import axios from "axios"
import { markLoading, unmarkLoading } from "../../store/isLoadingReducers"
import { setBooking } from "../../store/bookingsReducers"

function BookingsTable() {
  const token = useSelector(state => state.token)
  const bookings = useSelector(state => state.bookings)
  const isLoading = useSelector(state => state.isLoading)
  const dispatch = useDispatch();

  const handleOnChange = async (e) => {
    dispatch(markLoading())
    const res = await axios(`http://localhost:8000/api/v1/bookings?concertId=${e.target.value}`,
      {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      }
    )
      dispatch(setBooking(res.data.data.map(
        booking => {
          return {
            id: booking.id,
            userId: booking.userId,
            username: booking.userInfo.username,
            concertId: booking.concertId,
            concertTitle: booking.concertInfo.title,
            seatPosition: booking.seatPosition,
            noOfTickets: booking.noOfTickets,
            totalPrice: booking.totalPrice,
          }
        }
      )))
      dispatch(unmarkLoading()) 
  } 

  const handleBookingDelete = async (bookingId) =>{
    try {
          await axios.delete(`http://localhost:8000/api/v1/bookings/${bookingId}`,
        {
          headers: {
              'Authorization': `Bearer ${token}`
          }
        }
        )
      window.location.reload(true)
      }   catch (err) {
      console.log(err)
      }
      }

  useEffect(() => {
    document.title = "Bookings Table | Admin"
}, [])

  return (
    <>
      <AdminPanelHeader />
      <div className="d-flex">
        <AdminPanelSideNav />
        <center className="pt-3 users-table-container">
          <h1 className="text-uppercase fw-bold mb-2">Bookings Table</h1>
          <div className="d-flex justify-content-start ms-2 mb-2 search-bar">
              <div className="d-flex align-items-center bg-dark rounded py-1 px-2 ms-2 ">
                  <label htmlFor="search-form" className="col text-light me-3">Search by ConcertId:</label>
                  <input type="text" id="search-form" className="form-control" onChange={handleOnChange}/>
              </div>
          </div>
          <div className="w-100 mt-2 admin-table">
            <table id="bookings-table" 
            className="table table-bordered border border-dark table-striped table-hover" 
            style={{width:"100%"}}>
              <thead className="table-dark border-light" >
                <tr>
                  <th>ID</th>
                  <th>User ID</th>
                  <th>Username</th>
                  <th>Concert ID</th>
                  <th>Concert Title</th>
                  <th>Seat Position</th>
                  <th>No. of Tickets</th>
                  <th>Total Price</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody className="table-light border-dark">
                {
                  isLoading 
                  ?
                  <tr>
                    <td colSpan="9"><center><LoadingIcon /></center></td>
                  </tr>
                  : 
                  (
                    bookings.length 
                    ?
                    bookings.map(
                      (booking, index) => 
                        <tr key={index}>
                          <th scope="row">{booking.id}</th>
                          <td>{booking.userId}</td>
                          <td>{booking.username}</td>
                          <td>{booking.concertId}</td>
                          <td>{booking.concertTitle}</td>
                          <td>{booking.noOfTickets}</td>
                          <td>{booking.seatPosition}</td>
                          <td>{booking.totalPrice}</td>
                          <td><button className="btn bg-danger text-light px-3" onClick={() => {handleBookingDelete(booking.id)}}><i className="fa-solid fa-trash-can"></i></button></td>
                        </tr>
                    )
                    :
                    <td colSpan="8" className="text-center">No data found</td>
                  )
                }
              </tbody>
              <tfoot className="table-dark border-light">
                <tr>
                  <th>ID</th>
                  <th>User ID</th>
                  <th>Username</th>
                  <th>Concert ID</th>
                  <th>Concert Title</th>
                  <th>Seat Position</th>
                  <th>No. of Tickets</th>
                  <th>Total Price</th>
                  <th>Action</th>
                </tr>
              </tfoot>
            </table>
          </div>
        </center>
      </div>
      
    </>
  )
}

export default BookingsTable
