import { useEffect } from "react"
import ConcertCard from "../components/ConcertCard"
import axios from "axios"
import { useDispatch, useSelector } from "react-redux"
import { setMeals } from "../store/mealsReducers"
import FilterPanel from "../components/FilterPanel"

function MealGallery() {
  const dispatch = useDispatch()
  const meals = useSelector(state => state.meals)

  const fetchMeals = async () => {
    // same fetch result
    // axios('https://www.themealdb.com/api/json/v1/1/search.php?s=')
    //   .then(res => {console.log(res)})

    const res = await axios('https://www.themealdb.com/api/json/v1/1/search.php?s=')
    dispatch(setMeals(res.data.meals))
  }

  useEffect(() => {
    fetchMeals()
  }, [])

  return (
    <>
      <h3>Meal Gallery</h3>
      <main className="d-flex">
        <FilterPanel />
        <div className="d-flex flex-wrap w-75 m-3 gap-3">
        {meals.map(meal => <ConcertCard 
                              key={meal.idMeal} 
                              id={meal.idMeal} 
                              title={meal.strMeal} 
                              thumbnail={meal.strMealThumb}/> )}
        </div>
      </main>
    </>
  )
}

export default MealGallery
