import React, { useState } from "react"

function SeatTable() {
    const [selectedOption, setSelectedOption] = useState("");

  const options = [
    { value: "VIP Seat", label: "VIP Seat" },
    { value: "Premium Seat", label: "Premium Seat" },
    { value: "Regular Seat", label: "Regular Seat" },
  ];

  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <div>
      <label htmlFor="select">Select an option:</label>
      <select
        id="select"
        name="select"
        value={selectedOption}
        onChange={handleSelectChange}
      >
        <option value="">--Please choose an option--</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <p>You selected: {selectedOption}</p>
    </div>
  )
}

  export default SeatTable