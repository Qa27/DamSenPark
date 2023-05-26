import { combineReducers, configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import OrderReducer from "./reducers/OrderReducer";

const reducer = combineReducers({ ticket: OrderReducer });

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().prepend(thunk),
});

export type RootState = ReturnType<typeof reducer>;

export type AppDispatch = typeof store.dispatch;

export default store;
