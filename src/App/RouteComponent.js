import React from 'react'
import { Route, Switch } from 'react-router'
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom"
import loadable from '@loadable/component'

const Home = loadable((props)=>import('src/pages/Home'))
const Register = loadable((props)=>import('src/pages/Register'))
const Contact = loadable(()=>import('src/pages/Contact'))
const About = loadable(()=>import('src/pages/About'))
const SignIn = loadable(()=>import('src/pages/SignIn'))


class RouteComponent extends React.Component {
  render(){
    return (
      <div>
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/signin">
              <SignIn />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>)
  }
}

export default RouteComponent
export {RouteComponent}

