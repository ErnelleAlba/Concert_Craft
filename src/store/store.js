import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { concertsSlice } from "./concertsReducers";
import { isLoadingSlice } from "./isLoadingReducers";
import { customersSlice } from "./customersReducers";

const rootReducer = combineReducers({
  concerts: concertsSlice.reducer,
  customers: customersSlice.reducer,
  isLoading: isLoadingSlice.reducer
})

const store = configureStore({
  reducer: rootReducer
})

export default store