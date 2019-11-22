import React from 'react'
import ReactDOM from 'react-dom'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom"
  import loadable from '@loadable/component'
// import  {Home, Register, Contact, About, SignIn}  from "../pages"

const Home = loadable((props)=>import('src/pages/Home'))
const Register = loadable((props)=>import('src/pages/Register'))
const Contact = loadable(()=>import('src/pages/Contact'))
const About = loadable(()=>import('src/pages/About'))
const SignIn = loadable(()=>import('src/pages/SignIn'))



const WrapperComponent = ()=>{
    return (<Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <Link to="/register">Register</Link>
              </li>
              <li>
                <Link to="/signin">SignIn</Link>
              </li>
            </ul>
          </nav>
  
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
        </div>
      </Router>)
}


ReactDOM.render(
    <WrapperComponent />,
    document.getElementById('target')
  )