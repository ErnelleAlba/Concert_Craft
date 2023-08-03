import { Link } from "react-router-dom"

function MealCard(props) {
  const { id, title, thumbnail } = props

  return (
    <>
      <div className="card" style={{width: "18rem"}}>
        <img src={thumbnail} className="card-img-top" alt="..." />
        <div className="card-body">
          <h4 className="card-title">{title}</h4>
          <Link to={`/meal/${id}`} className="btn btn-primary">View Full Recipe</Link>
        </div>
      </div>
    </>
  )
}

export default MealCard
