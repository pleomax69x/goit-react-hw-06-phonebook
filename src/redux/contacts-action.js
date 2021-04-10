// import * as types from "./contacts-types";
import { createAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

// ============================================ -toolkit
// export const addContact = ({ name, number }) => ({
//   type: types.ADD,
//   payload: {
//     id: uuidv4(),
//     name: name,
//     number: number,
//   },
// });

// export const deleteContact = (contactId) => ({
//   type: types.DELETE,
//   payload: contactId,
// });

// export const changeFilter = (value) => ({
//   type: types.CHANGE_FILTER,
//   payload: value,
// });

// ================================================ +toolkit
export const addContact = createAction("contact/add", ({ name, number }) => {
  return {
    payload: {
      id: uuidv4(),
      name,
      number,
    },
  };
});

export const deleteContact = createAction("contact/delete");

export const changeFilter = createAction("contact/filter");
// export const changeFilter = createAction(types.CHANGE_FILTER);
