import { Link, NavLink } from "react-router-dom"
import "./AdminPanelSideNav.css"
import axios from "axios"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { setCustomers } from "../../store/customersReducers"
import { markLoading, unmarkLoading } from "../../store/isLoadingReducers"
import { setConcerts } from "../../store/concertsReducers"

function AdminPanelSideNav() {
  const dispatch = useDispatch();

  const fetchCustomers = async () => {
    const res = await axios('http://localhost:8000/api/v1/customers')
    // console.log(res)
    dispatch(setCustomers(res.data.data.map(
      customer => {
        return {
          id: customer.id,
          firstName: customer.firstName,
          lastName: customer.lastName,
          age: customer.age,
          email: customer.email,
          password: customer.password,
          phone: customer.phone,
          address: customer.address
        }
      }
    )))
    dispatch(unmarkLoading())
  }

  const fetchConcerts = async () => {

    const res = await axios('http://localhost:8000/api/v1/concerts')
    // console.log(res)
    dispatch(setConcerts(res.data.data.map(
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
  }

  useEffect(() => {
    dispatch(markLoading());
    fetchCustomers();
    fetchConcerts()
  }, [])


  return (
    <>
      <div className="d-flex flex-wrap ms-0 col-md-4 col-lg-4 col-xl-2 ">
        <div className="d-flex align-items-center flex-column justify-content-between bg-dark w-100 px-2 px-md-4 px-lg-4" id="sidebar-container">
          <div className="d-flex flex-column align-items-center">
              <h2 className="d-none d-md-inline text-light mt-4">MENU</h2>
              <ul className="nav nav-pills flex-column mt-4 gap-4">
              <li className="nav-item py-1 py-sm-0">
                  <NavLink className="nav-link"  id="admin-nav" to="/admin/dashboard"><i className="bi bi-speedometer2 me-0 me-md-3 me-lg-3"></i><span className="d-md-inline d-none">Dashboard</span></NavLink>
                </li>
                <li className="nav-item py-1 py-sm-0">
                  <NavLink className="nav-link"  id="admin-nav" to="/admin/bookings"><i className="fa-solid fa-ticket me-0 me-md-3 me-lg-3"></i><span className="d-md-inline d-none">Bookings List</span></NavLink>
                </li>
                <li className="nav-item py-1 py-sm-0">
                  <NavLink className="nav-link"  id="admin-nav" to="/admin/concerts"><i className="fa-solid fa-music me-0 me-md-3 me-lg-3"></i><span className="d-md-inline d-none">Concerts List</span></NavLink>
                </li>
                <li className="nav-item py-1 py-sm-0">
                  <NavLink className="nav-link px-0"  id="admin-nav" to="/admin/users"><i className="fa-solid fa-user ms-1 me-0 me-md-3 me-lg-3"></i><span className="d-md-inline d-none">Customers List</span></NavLink>
                </li>
              </ul>
          </div>
          
            <div className="nav-item py-1 py-sm-0 mb-5 w-100 logout-btn">
              <Link className="nav-link logout-btn"  id="admin-nav" to="/admin"><i className="fa-solid fa-right-from-bracket me-0 me-md-3 me-lg-3"></i><span className="d-md-inline d-none">Log Out</span></Link>
            </div>
          
        </div>
      </div>
    </>
  )
}

export default AdminPanelSideNav
