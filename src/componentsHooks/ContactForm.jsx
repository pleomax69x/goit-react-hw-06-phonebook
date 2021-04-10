import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as action from "../redux/contacts-action";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const handleNameChange = (e) => setName(e.currentTarget.value);
  const handleNumberChange = (e) => setNumber(e.currentTarget.value);

  const items = useSelector((state) => state.contacts.items);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !number) {
      alert("Some field is empty");
      return;
    }

    const isUnicContact = !!items.find(
      (item) => item.name.toLowerCase() === name.toLowerCase()
    );

    if (isUnicContact) {
      alert(`${name} is alredy in contacts.`);
      return;
    }

    dispatch(action.addContact({ name, number }));
    setName("");
    setNumber("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Name
          <input
            type="text"
            name="name"
            placeholder="Enter Name"
            value={name}
            onChange={handleNameChange}
          />
        </label>
        <label>
          Number
          <input
            type="tel"
            name="number"
            placeholder="Enter Number"
            value={number}
            onChange={handleNumberChange}
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
    </>
  );
};
export default ContactForm;
