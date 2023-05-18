import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { OrderReducer } from "./components/reducers/OrderReducer";
import thunk from "redux-thunk";

const reducer = combineReducers({ ticket: OrderReducer });

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().prepend(thunk),
});

export default store;
