import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { mealsSlice } from "./mealsReducers";

const rootReducer = combineReducers({
  meals: mealsSlice.reducer
})

const store = configureStore({
  reducer: rootReducer
})

export default store