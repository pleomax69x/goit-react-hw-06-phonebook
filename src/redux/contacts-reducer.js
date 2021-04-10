import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
// import * as types from "./contacts-types";
import * as action from "../redux/contacts-action";

// const INITIAL_STATE = {
//   contacts: {
//     items: [],
//     filter: "",
//   },
// };

const INITIAL_CONTACT = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];

const itemReducer = createReducer(INITIAL_CONTACT, {
  [action.addContact]: (state, action) => [...state, action.payload],
  [action.deleteContact]: (state, action) =>
    state.filter((contact) => contact.id !== action.payload),
});

// const itemReducer = (state = INITIAL_CONTACT, { type, payload }) => {
//   switch (type) {
//     case types.ADD:
//       return [...state, payload];
//     case types.DELETE:
//       return state.filter((contact) => contact.id !== payload);

//     default:
//       return state;
//   }
// };

const filterReducer = createReducer("", {
  [action.changeFilter]: (_, action) => action.payload,
});

// const filterReducer = (state = "", { type, payload }) => {
//   switch (type) {
//     case types.CHANGE_FILTER:
//       return payload;

//     default:
//       return state;
//   }
// };

const contactsReducer = combineReducers({
  items: itemReducer,
  filter: filterReducer,
});

export default contactsReducer;
