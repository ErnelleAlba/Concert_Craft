import { createSlice } from "@reduxjs/toolkit";

export const bookingsSlice = createSlice({
  name: 'bookings',
  initialState: [],
  reducers: {
    setBooking: (state, action) => {
      // console.log(action.payload)
      return action.payload
    }
  }
})

export const { setBooking } = bookingsSlice.actions