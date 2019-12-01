import React from 'react'
import { StaticRouter } from 'react-router'
import RouteComponent from './RouteComponent'

class App extends React.Component {
    render(){
        const context = {}
        return (
            <StaticRouter location="/" context={context}>
                <RouteComponent />
            </StaticRouter>
        )
    }
}

export default App