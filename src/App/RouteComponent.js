import React from "react";
import { Route, Switch } from "react-router";
// Browser router should not be here since we are using SSR
// import {
//     BrowserRouter as Router,
//     Link
//   } from "react-router-dom"
import loadable from "@loadable/component";

// Need to add webpack alias to use 'src' directly. Check and add webpack alias
// Refer babel-plugin-webpack-alias
const HomePage = loadable((props) => import("../pages/Home"));
class RouteComponent extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/" exact strict>
            <HomePage />
          </Route>{" "}
        </Switch>{" "}
      </div>
    );
  }
}

export default RouteComponent;
export { RouteComponent };
