import React, { useState } from "react"



const options = [
  { value: 1, label: ' 1', price: 3000 },
  { value: 2, label: ' 2', price: 3000 },
  { value: 3, label: ' 3', price: 3000 },
  { value: 4, label: ' 4', price: 3000 },
  { value: 5, label: ' 5', price: 3000 },
];

function TicketTable() {

  const [selectedOption, setSelectedOption] = useState (options [0]);

  const handleOptionChange = (e) => {
    setSelectedOption (options.find (option => option.value === parseInt (e.target.value)));
  };

  const calculateAmount = () => {
    return selectedOption.price * selectedOption.value;
  }
  

  return (
    <>
    <div>
      <select onChange={handleOptionChange}>
        {options.map ((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <p>Amount: {calculateAmount ()}</p> 
    </div>
  </>
  )
        }


  export default TicketTable

  export const calculateAmount = (selectedOption) => {
    return selectedOption.price * selectedOption.value;
  };