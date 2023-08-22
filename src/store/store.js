import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { concertsSlice } from "./concertsReducers";
import { isLoadingSlice } from "./isLoadingReducers";
import { customersSlice } from "./customersReducers";
import { loggedInUserSlice } from "./loggedInUserReducers";
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import { persistReducer, persistStore } from "redux-persist";
import { tokenSlice } from "./tokenReducers";
import { bookingsSlice } from "./bookingsReducers";
import { userIdSlice } from "./userIdReducers";

const persistConfig = {
  key: 'root',
  storage,
}

const rootReducer = combineReducers({
  concerts: concertsSlice.reducer,
  customers: customersSlice.reducer,
  isLoading: isLoadingSlice.reducer,
  loggedInUser: loggedInUserSlice.reducer,
  token: tokenSlice.reducer,
  bookings: bookingsSlice.reducer,
  userId: userIdSlice.reducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk]
})

export const persistor = persistStore(store)