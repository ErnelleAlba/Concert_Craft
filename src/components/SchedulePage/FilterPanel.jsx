import "./FilterPanel.css"

function FilterPanel() {

  return (
    <>
      <div className="filter-container mb-5">   
        <ul class="nav justify-content-center flex-wrap bg-light text-dark gap-3 pt-2 pb-2">
          <li class="navy-item">
            <a class="nav-link" href="#" >January</a>
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
        </ul>
        <ul class="nav justify-content-center bg-light text-dark gap-3 pt-3 pb-2">
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
    </>
  )
}

export default FilterPanel
