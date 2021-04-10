import "./App.css";
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  NavLink,
} from "react-router-dom";

import phoneClassPage from "./Pages/phoneClassPage";
import phoneHooksPage from "./Pages/phoneHooksPage";

const App = () => {
  return (
    <Router>
      <>
        <ul className="list">
          <li className="list__item">
            <NavLink
              exact
              className="navLink"
              activeClassName="navLink--active"
              to="/phoneClassPage"
            >
              phoneClassPage
            </NavLink>
          </li>
          <li className="list__item">
            <NavLink
              className="navLink"
              activeClassName="navLink--active"
              to="/phoneHooksPage"
            >
              phoneHooksPage
            </NavLink>
          </li>
        </ul>

        <Switch>
          <Route path="/phoneClassPage" exact component={phoneClassPage} />
          <Route path="/phoneHooksPage" component={phoneHooksPage} />

          <Redirect to="/phoneClassPage" />
        </Switch>
      </>
    </Router>

    // <h1>Phonebook</h1>
    // <ContactForm />

    // <h2>Contacts</h2>
    // <Filter />
    // <ContactList />
  );
};

export default App;
