import { createSlice } from "@reduxjs/toolkit";

export const tokenSlice = createSlice({
  name: 'token',
  initialState: '',
  reducers: {
    setToken: (state, action) => {
      // console.log(action.payload)
      return action.payload
    }
  }
})

export const { setToken } = tokenSlice.actions