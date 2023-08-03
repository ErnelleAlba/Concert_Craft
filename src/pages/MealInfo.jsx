import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

function MealInfo() {
  const { id } = useParams()
  const [meal, setMeal] = useState({
    title: '',
    thumbnail: '',
    instructions: '',
    ingredients: []
  })

  const fetchMeal = async () => {
    const res = await axios(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
    const mealResults = res.data.meals[0]
    const mealObj = {
      title: mealResults.strMeal,
      thumbnail: mealResults.strMealThumb,
      instructions: mealResults.strInstructions,
    }

    const ingredients = []
    for (let i = 0; i <= 20; i++) {
      const ingredient = mealResults[`strIngredient${i}`]
      const measure = mealResults[`strMeasure${i}`]
      if (ingredient) {
        ingredients.push(`${measure} of ${ingredient}`)
      }
    }
    mealObj.ingredients = ingredients
    setMeal(mealObj)
  }

  useEffect(() => {
    fetchMeal() 
  }, [])

  return (
    <>
      <main className="w-100 d-flex flex-column align-items-center">
        <h4 className="mb-5">{ meal.title }</h4>
        <div className="d-flex">
          <img src={ meal.thumbnail } alt={ meal.title } width="300px" />
          <ul>
            { 
              meal.ingredients.map(
                ingredient => <li>{ingredient}</li>
                )  
            }
          </ul>
        </div>
        <pre className="w-50 mt-5" style={{whiteSpace:"pre-wrap"}}>
          {meal.instructions}
        </pre>
      </main>
    </>
  )
}

export default MealInfo
