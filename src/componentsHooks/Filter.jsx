import { useSelector, useDispatch } from "react-redux";
import * as action from "../redux/contacts-action";

const Filter = () => {
  const filter = useSelector((state) => state.contacts.filter);
  const dispatch = useDispatch();

  const handleFilterChange = (e) => {
    const text = e.currentTarget.value;
    dispatch(action.changeFilter(text));
  };

  return (
    <>
      <p>Find contact by name</p>
      <label>
        <input
          type="text"
          value={filter}
          onChange={handleFilterChange}
          placeholder="Enter name to find"
        />
      </label>
    </>
  );
};
export default Filter;
