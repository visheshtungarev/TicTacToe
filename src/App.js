import React from "react";
import Home from "./views/HomePage";
import GamePage from "./views/GamePage";
import CreditPage from "./views/CreditPage";
import { Route, Switch, Redirect } from "react-router-dom";
import "./App.scss";

//Main screen components
const Main = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/gamepage" component={GamePage} />
    <Route path="/creditpage" component={CreditPage} />
  </Switch>
);

const App = () => (
  <div>
    <div>
      <Main />
    </div>
  </div>
);

export default App;
