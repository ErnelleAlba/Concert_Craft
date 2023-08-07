import { useEffect } from "react"
import axios from "axios"
import { useDispatch, useSelector } from "react-redux"
import ConcertSchedule from "../components/HomePage/ConcertSchedule"
import Footer from "../components/Footer"
import NavBar from "../components/NavBar"

function ScheduleBooking() {
  const dispatch = useDispatch()
  const meals = useSelector(state => state.meals)

  const fetchMeals = async () => {

    const res = await axios('https://www.themealdb.com/api/json/v1/1/search.php?s=')
    dispatch(setMeals(res.data.meals))
  }

  useEffect(() => {
    fetchMeals()
  }, [])

  function categorizeMonth(month) {
    const concerts = [
      { month: "January", concert: "New Year's Concert" },
      { month: "February", concert: "Valentine's Concert" },
      { month: "March", concert: "St. Patrick's Day Concert" },
      { month: "April", concert: "Easter Concert" },
      { month: "May", concert: "Mother's Day Concert" },
      { month: "June", concert: "Father's Day Concert" },
      { month: "July", concert: "Independence Day Concert" },
      { month: "August", concert: "Summer Concert" },
      { month: "September", concert: "Back to School Concert" },
      { month: "October", concert: "Halloween Concert" },
      { month: "November", concert: "Thanksgiving Concert" },
      { month: "December", concert: "Christmas Concert" }
    ];
    const result = concerts.filter(concert => concert.month === month);
    return result.length > 0 ? result[0].concert : `No concerts in ${month}`;
  }
  
  console.log(categorizeMonth("December"));
  

  return (
    <>
    <NavBar />
      <div id="home-section-1" className="concert-show-container">
        <h1>Scheduled Concerts</h1>
        <h3>Upcoming Concerts</h3>
        <div className="concerts-container d-flex">

        </div>
      </div>
      <div className="border">
        
      <ul class="nav justify-content-center bg-light text-dark">
        <li class="navy-item">
          <a class="nav-link" href="#">January</a>
        </li>
        <li class="navy-item">
          <a class="nav-link" href="#">February</a>
        </li>
        <li class="navy-item">
          <a class="nav-link" href="#">March</a>
        </li>
        <li class="navy-item">
          <a class="nav-link" href="#">April</a>
        </li>
        <li class="navy-item">
          <a class="nav-link" href="#">May</a>
        </li>
        <li class="navy-item">
          <a class="nav-link" href="#">June</a>
        </li>
        <li class="navy-item">
          <a class="nav-link" href="#">July</a>
        </li>
        <li class="navy-item">
          <a class="nav-link" href="#">August</a>
        </li>
        <li class="navy-item">
          <a class="nav-link" href="#">September</a>
        </li>
        <li class="navy-item">
          <a class="nav-link" href="#">October</a>
        </li>
        <li class="navy-item">
          <a class="nav-link" href="#">November</a>
        </li>
        <li class="navy-item">
          <a class="nav-link" href="#">December</a>
        </li>
      </ul>
          
      </div>
      <br />
      <ConcertSchedule />
    <Footer/>
    </>
  )
}

export default ScheduleBooking
