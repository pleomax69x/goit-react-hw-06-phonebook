import { useSelector, useDispatch } from "react-redux";
import * as action from "../redux/contacts-action";

const ContactList = () => {
  const items = useSelector((state) => state.contacts.items);
  const filter = useSelector((state) => state.contacts.filter);
  const dispatch = useDispatch();

  const getvisibleContacts = (allContact, filter) => {
    const lowText = filter.toLowerCase();

    return allContact.filter((contact) =>
      contact.name.toLowerCase().includes(lowText)
    );
  };

  const visibleContacts = getvisibleContacts(items, filter);

  return (
    <ul>
      {visibleContacts.map(({ id, name, number }) => (
        <li key={id}>
          {name}: {number}
          <button
            type="button"
            onClick={() => dispatch(action.deleteContact(id))}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
