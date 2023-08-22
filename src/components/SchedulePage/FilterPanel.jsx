import { useDispatch } from "react-redux";
import "./FilterPanel.css"
import { markLoading, unmarkLoading } from "../../store/isLoadingReducers";
import { useEffect } from "react";
import axios from "axios";
import { setConcerts } from "../../store/concertsReducers";

function FilterPanel() {

  const dispatch = useDispatch();

  const handleOnClick = async (e) => {
    dispatch(markLoading())

    const res = await axios(`http://localhost:8000/api/v1/concerts?month=${e.target.id}`)
    
      dispatch(setConcerts(res.data.data.map(
      concert => {
        return {
          id: concert.id,
          title: concert.title,
          posterImageUrl: concert.posterImageUrl.replace('storage','http://localhost:8000/storage'),
          description: concert.description,
          eventPlace: concert.eventPlace,
          eventDate: concert.eventDate,
          ticketPrice: concert.ticketPrice,
        }
      }
    )))
    dispatch(unmarkLoading())
    // console.log(res.data.data)

  }

  useEffect(() => {
  }, [])
  

  return (
    <>
      <div className="filter-container mb-5">   
        <ul className="nav justify-content-center flex-wrap bg-light text-dark gap-3 pt-2 pb-2">
          <li className="navy-item">
            <button className="nav-link btn"  id="1" onClick={handleOnClick} >January</button>
          </li>
          <li className="navy-item">
            <button className="nav-link btn" id="2" onClick={handleOnClick} >February</button>
          </li>
          <li className="navy-item">
            <button className="nav-link btn" id="3" onClick={handleOnClick} >March</button>
          </li>
          <li className="navy-item">
            <button className="nav-link btn" id="4" onClick={handleOnClick} >April</button>
          </li>
          <li className="navy-item">
            <button className="nav-link btn" id="5" onClick={handleOnClick} >May</button>
          </li>
          <li className="navy-item">
            <button className="nav-link btn" id="6" onClick={handleOnClick} >June</button>
          </li>
          <li className="navy-item">
            <button className="nav-link btn" id="7" onClick={handleOnClick} >July</button>
          </li>
        </ul>
        <ul className="nav justify-content-center bg-light text-dark gap-3 pt-3 pb-2">
          <li className="navy-item">
            <button className="nav-link btn" id="8" onClick={handleOnClick} >August</button>
          </li>
          <li className="navy-item">
            <button className="nav-link btn" id="9" onClick={handleOnClick} >September</button>
          </li>
          <li className="navy-item">
            <button className="nav-link btn" id="10" onClick={handleOnClick} >October</button>
          </li>
          <li className="navy-item">
            <button className="nav-link btn" id="11" onClick={handleOnClick} >November</button>
          </li>
          <li className="navy-item">
            <button className="nav-link btn" id="12" onClick={handleOnClick} >December</button>
          </li>
        </ul>
      </div>
    </>
  )
}

export default FilterPanel
