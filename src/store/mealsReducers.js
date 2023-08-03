import { createSlice } from "@reduxjs/toolkit";

export const mealsSlice = createSlice({
  name: 'meals',
  initialState: [],
  reducers: {
    setMeals: (state, action) => {
      console.log(action.payload)
      return action.payload
    }
  }
})

export const { setMeals } = mealsSlice.actions