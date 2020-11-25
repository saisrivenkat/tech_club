import React from "react";
import "./App.css";
import { BrowserRouter, Router, Route, Switch } from "react-router-dom";
import Main from "./components/Main";
import Events from "./components/Events";
import Activities from "./components/Activities";
import Team from "./components/Team";
import Member from "./components/TeamMembers";


class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route exact path="/events">
            <Events />
          </Route>
          <Route exact path="/Activities">
            <Activities />
          </Route>
          <Route exact path="/Team">
            <Team />
          </Route>
          <Route exact path="/Member">
            <Member />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}
export default App;
