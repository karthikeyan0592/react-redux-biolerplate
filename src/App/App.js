
import React , { Suspense } from 'react'
import ReactDOM, {hydrate} from 'react-dom'
import { loadableReady } from '@loadable/component'
import RouteComponent from './RouteComponent.js'


loadableReady(() => {
  const root = document.getElementById('target')
  hydrate(<Suspense fallback=""><RouteComponent /></Suspense>, root)
})

// ReactDOM.render(
//     <WrapperComponent />,
//     document.getElementById('target')
//   )