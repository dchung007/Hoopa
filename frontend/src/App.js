import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch, NavLink } from "react-router-dom";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import QuestionsList from "./components/QuestionsList/index.js";
import SingleQuestion from "./components/SingleQuestion";
import HomePage from "./components/HomePage";
import Footer from "./components/Footer";
import About from "./components/About";
import './app.css';

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <div id="holder">
      <div className="nav-bar-div">
        <Navigation isLoaded={isLoaded} />
      </div>

      <div className="body-div">
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/questions">
            <QuestionsList />
          </Route>
          <Route exact path="/questions/:id">
            <SingleQuestion />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route>
            <NavLink to="/"> <h1 className="page-not-found">404 Error: Page does not exist, click here to return to home page</h1></NavLink>
          </Route>
        </Switch>
      </div>

      <div className="footer-div">
        <Footer />
      </div>

    </div>
  );
}

export default App;
