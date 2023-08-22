import { createSlice } from "@reduxjs/toolkit";

export const userIdSlice = createSlice({
  name: 'userId',
  initialState: '',
  reducers: {
    setUserId: (state, action) => {
      // console.log(action.payload)
      return action.payload
    }
  }
})

export const { setUserId } = userIdSlice.actions