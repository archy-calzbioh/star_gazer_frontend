import React from "react";

import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ListLocationComponent from "./components/ListLocationComponent";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import CreateLocationComponent from "./components/CreateLocationComponent";
import ViewLocationComponent from "./components/ViewLocationComponent";

function App() {
  return (
    <div>
      <Router>
        <HeaderComponent />
        <div className="container">
          <Switch>
            <Route path="/" exact component={ListLocationComponent}></Route>
            <Route path="/locations" component={ListLocationComponent}></Route>
            <Route
              path="/add-location/:id"
              component={CreateLocationComponent}
            ></Route>
            <Route
              path="/view-location/:id"
              component={ViewLocationComponent}
            ></Route>
            {/* <Route path = "/update-location/:id" component = {UpdateLocationComponent}></Route> */}
          </Switch>
        </div>
        <FooterComponent />
      </Router>
    </div>
  );
}

export default App;
