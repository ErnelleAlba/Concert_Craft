import { createSlice } from "@reduxjs/toolkit";

export const concertsSlice = createSlice({
  name: 'concerts',
  initialState: [],
  reducers: {
    setConcerts: (state, action) => {
      // console.log(action.payload)
      return action.payload
    }
  }
})

export const { setConcerts } = concertsSlice.actions