import React from "react";
import AppPage from "./AppPage";
import Cleanliness from "./pages/CleanlinessPage/Cleanliness";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={AppPage} />
        <Route path="/Cleanliness" component={Cleanliness} />
      </Switch>
    </Router>
  );
};

export default App;
