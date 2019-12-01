import React from 'react'
import { Route, Switch } from 'react-router'
// Browser router should not be here since we are using SSR
// import {
//     BrowserRouter as Router,
//     Link
//   } from "react-router-dom"
import loadable from '@loadable/component'

// Need to add webpack alias to use 'src' directly. Check and add webpack alias
// Refer babel-plugin-webpack-alias
const HomePage = loadable((props)=>import('../pages/Home'))
// @todo need to remove 1st first the site have to work with singe page - to save compilation time
const Register = loadable((props)=>import('../pages/Register'))
const Contact = loadable(()=>import('../pages/Contact'))
const About = loadable(()=>import('../pages/About'))
const SignIn = loadable(()=>import('../pages/SignIn'))


class RouteComponent extends React.Component {
  render(){
    return (
      <div>
          <Switch>
            <Route path="/about" exact strict>
              <About />
            </Route>
            <Route path="/contact" exact strict>
              <Contact />
            </Route>
            <Route path="/singnin" exact strict>
              <SignIn />
            </Route>
            <Route path="/" exact strict>
              <HomePage />
            </Route>
          </Switch>
      </div>
    )
  }
}

export default RouteComponent
export {RouteComponent}

