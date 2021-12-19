import React from "react";
import Navigation from "./components/Navigation";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Greetings from "./containers/Greetings";
import GithubProfile from "./containers/GithubProfile";
import Skills from "./containers/Skills";
import Education from "./containers/Education";
import Experience from "./containers/Experience";
import Projects from "./containers/Projects";
import Feedback from "./containers/Feedback";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          path="/"
          exact
          render={(props) => (
            <>
              <Navigation />
              <Greetings />
              <Skills />
              <Education />
              <Experience />
              <Projects />
              <Feedback />
              <GithubProfile />
            </>
          )}
        />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
