import ContactForm from "../componentsHooks/ContactForm";
import ContactList from "../componentsHooks/ContactList";
import Filter from "../componentsHooks/Filter";

const phoneHooksPage = () => {
  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />

      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </>
  );
};

export default phoneHooksPage;
