import { useEffect, useState } from "react"
import AdminPanelHeader from "../../components/AdminPanel/AdminPanelHeader"
import AdminPanelSideNav from "../../components/AdminPanel/AdminPanelSideNav"
import CreateConcertModal from "../../components/AdminPanel/CreateConcertModal";
import { useDispatch, useSelector } from "react-redux"
import LoadingIcon from "../../components/LoadingIcon"
import { setConcerts } from "../../store/concertsReducers"
import { markLoading, unmarkLoading } from "../../store/isLoadingReducers"
import axios from "axios"
import EditConcertModal from "../../components/AdminPanel/EditConcertModal"

function ConcertsTable() {
  const concerts = useSelector(state => state.concerts)
  const isLoading = useSelector(state => state.isLoading)
  const token = useSelector(state => state.token)

  const [concertId, setConcertId] = useState(null)

  const dispatch = useDispatch();

  const handleOnChange = async (e) => {
    dispatch(markLoading())

    const resTitle = await axios(`http://localhost:8000/api/v1/concerts?title=${e.target.value}`)
    
      dispatch(setConcerts(resTitle.data.data.map(
      concert => {
        return {
          id: concert.id,
          title: concert.title,
          posterImageUrl: concert.posterImageUrl,
          description: concert.description,
          eventPlace: concert.eventPlace,
          eventDate: concert.eventDate,
          ticketPrice: concert.ticketPrice,
        }
      }
    )))

    dispatch(unmarkLoading())
    // console.log(e.target.value)
  }

  const handleOnClickDelete = async (concertId) => {
    await axios.delete(`http://localhost:8000/api/v1/concerts/${concertId}`,
      {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      }
    )
    // console.log(concertId)
    window.location.reload(true)
  }

  const handleOnClickEdit = (concertId) => {
    setConcertId(concertId)
  }

  useEffect(() => {
    // table()
    document.title = "Concerts Table | Admin"
}, [])

  return (
    <>
      <AdminPanelHeader />
      <div className="d-flex">
        <AdminPanelSideNav />
        <center className="pt-3 users-table-container">
          <h1 className="text-uppercase fw-bold mb-2">Concerts Table</h1>
             <div className="d-flex justify-content-start ms-2 mb-2">
              <button className="btn btn-dark" data-bs-toggle="modal" data-bs-target="#create-concert-modal">Add Concert</button>
              <CreateConcertModal />
              <div className="d-flex align-items-center bg-dark rounded py-1 px-2 ms-2 ">
                <label htmlFor="search-form" className="col text-light me-3">Search:</label>
                <input type="text" id="search-form" className="form-control search-concert" onChange={handleOnChange}/>
              </div>
            </div>         
          <div className="w-100 mt-2 admin-table">
            <table id="concerts-table" 
            className="table table-bordered border border-dark table-striped table-hover" 
            style={{width:"100%"}}>
              <thead className="table-dark border-light" >
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Title</th>
                  <th scope="col">ImageURL</th>
                  <th scope="col">Description</th>
                  <th scope="col">Event Date</th>
                  <th scope="col">Place</th>
                  <th scope="col">Ticket Price</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody className="table-light border-dark">
                {
                  isLoading 
                  ?
                  <tr>
                    <td colSpan="8"><center><LoadingIcon /></center></td>
                  </tr>
                  : (
                    concerts.length 
                    ? 
                    concerts.map((concert, index) =>
                    <tr key={index}>
                      <th scope="row">{concert.id}</th>
                      <td>{concert.title}</td>
                      <td>{concert.posterImageUrl}</td>
                      <td>{concert.description}</td>
                      <td>{concert.eventDate}</td>
                      <td>{concert.eventPlace}</td>
                      <td>{concert.ticketPrice}</td>
                      <td>
                        <button className="btn btn-success" data-bs-toggle="modal" data-bs-target="#edit-concerts-modal" onClick={() => handleOnClickEdit(concert.id)}>
                          <i className="fa-solid fa-pen-to-square"></i></button>
                          
                          <EditConcertModal id={concertId} />
                          
                        <button className="btn btn-danger" onClick={() => handleOnClickDelete(concert.id)}><i className="fa-solid fa-trash"></i></button>
                        
                      </td>
                    </tr>) 
                    : 
                    <tr>
                      <td colSpan="8" className="text-center">No data found</td>
                    </tr>
                  )
                }

              </tbody>
              <tfoot className="table-dark border-light">
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Title</th>
                  <th scope="col">ImageURL</th>
                  <th scope="col">Description</th>
                  <th scope="col">Event Date</th>
                  <th scope="col">Event Place</th>
                  <th scope="col">Ticket Price</th>
                  <th scope="col">Action</th>
                </tr>
              </tfoot>
            </table>

          </div>
        </center>
      </div>
    <CreateConcertModal/>
    </>
  )
}

export default ConcertsTable
