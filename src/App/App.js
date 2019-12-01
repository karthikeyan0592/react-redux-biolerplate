
import React , { Suspense } from 'react'
import ReactDOM, {hydrate} from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { loadableReady } from '@loadable/component'
import RouteComponent from './RouteComponent.js'


// loadableReady(() => {
//   const root = document.getElementById('target')
//   hydrate(
//     <Suspense fallback="">
//       <BrowserRouter>
//         <RouteComponent />
//       </BrowserRouter>
//     </Suspense>, root)
// })

function WrapperComponent() {
  return (
    <Router>
      <RouteComponent />
    </Router>
    // <RouteComponent />
  )
}

ReactDOM.render(
    <WrapperComponent />,
    document.getElementById('app-root')
  )