
import React , { Suspense } from 'react'
import ReactDOM, {hydrate} from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { loadableReady } from '@loadable/component'
import RouteComponent from './RouteComponent.js'


function WrapperComponent() {
  return (
    <Router>
      <RouteComponent />
     </Router>
  )
}
loadableReady(() => {
  const root = document.getElementById('target')
  hydrate(<WrapperComponent />, root)
})


// ReactDOM.render(
//     <WrapperComponent />,
//     document.getElementById('app-root')
//   )