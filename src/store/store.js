import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { mealsSlice } from "./mealsReducers";
import { isLoadingSlice } from "./isLoadingReducers";

const rootReducer = combineReducers({
  meals: mealsSlice.reducer,
  isLoading: isLoadingSlice.reducer
})

const store = configureStore({
  reducer: rootReducer
})

export default store