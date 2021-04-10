// import { createStore, combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import contactsReducer from "./contacts-reducer";

// const rootReducer = combineReducers({
//   contacts: contactsReducer,
// });

// const store = createStore(
//   rootReducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
  devTools: process.env.NODE_ENV === "development",
});

export default store;
