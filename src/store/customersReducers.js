import { createSlice } from "@reduxjs/toolkit";

export const customersSlice = createSlice({
  name: 'customers',
  initialState: [],
  reducers: {
    setCustomers: (state, action) => {
      // console.log(action.payload)
      return action.payload
    }
  }
})

export const { setCustomers } = customersSlice.actions