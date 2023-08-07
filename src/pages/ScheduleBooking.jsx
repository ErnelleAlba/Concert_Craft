import { useEffect } from "react"
import axios from "axios"
import { useDispatch, useSelector } from "react-redux"
import ConcertSchedule from "../components/HomePage/ConcertSchedule"
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"

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

  return (
    <>
    <NavBar />
      <div id="home-section-1" className="concert-show-container">
        <h1>Scheduled Concerts</h1>
        <h3>Upcoming Concerts</h3>
        <div className="concerts-container d-flex">

        </div>
      </div>
      <ConcertSchedule />
    <Footer/>
    </>
  )
}

export default ScheduleBooking
