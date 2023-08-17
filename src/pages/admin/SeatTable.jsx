import React, { useState } from "react"

function SeatTable() {
    const [selectedOption, setSelectedOption] = useState("");

  const Seatoptions = [
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
        id={selectedOption.id}
        name="select"
        value={selectedOption}
        onChange={handleSelectChange}
      >
        <option value="">--Please choose an option--</option>
        {Seatoptions.map((option) => (
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