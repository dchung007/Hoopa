import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import LoginFormPage from "./components/LoginFormPage";
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import QuestionsList from "./components/QuestionsList/index.js";
import SingleQuestion from "./components/SingleQuestion";
import HomePage from "./components/HomePage";
import EditQuestion from "./components/EditQuestion";
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
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route exact path="/login">
            <LoginFormPage />
          </Route>
          <Route exact path="/signup">
            <SignupFormPage />
          </Route>
        </Switch>
      )}
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
        <Route exact path="/login">
        </Route>
        <Route exact path="/signup">
        </Route>
        <Route>
          <h1 className="page-not-found">404 Error: Page does not exist</h1>
        </Route>
      </Switch>


        <Footer />

    </>
  );
}

export default App;
