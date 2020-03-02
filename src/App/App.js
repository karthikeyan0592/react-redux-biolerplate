import React, { Suspense } from "react";
import ReactDOM, { hydrate } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { loadableReady } from "@loadable/component";
import RouteComponent from "./RouteComponent.js";

const isEnableSSR = process.env.Enable_SSR || false;

function WrapperComponent() {
  return (
    <Router>
      <RouteComponent />
    </Router>
  );
}

function hydrateApp() {
  loadableReady(() => {
    const root = document.getElementById("target");
    hydrate(<WrapperComponent />, root);
  });
}

function renderApp() {
  ReactDOM.render(<WrapperComponent />, document.getElementById("target"));
}

if (isEnableSSR) {
  hydrateApp();
} else {
  renderApp();
}
