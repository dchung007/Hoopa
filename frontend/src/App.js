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
          <Route path="/login">
            <LoginFormPage />
          </Route>
          <Route path="/signup">
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
      </Switch>

      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
