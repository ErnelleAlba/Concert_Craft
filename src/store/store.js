import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { concertsSlice } from "./concertsReducers";
import { isLoadingSlice } from "./isLoadingReducers";

const rootReducer = combineReducers({
  concerts: concertsSlice.reducer,
  isLoading: isLoadingSlice.reducer
})

const store = configureStore({
  reducer: rootReducer
})

export default store