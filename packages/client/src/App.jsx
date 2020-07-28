import React from 'react'
import { Route } from 'react-router-dom'
import Home from './screens/Home'
import Edit from './screens/Edit'
import 'bulma'

export function App() {
    return (
        <>
            <Route exact={true} path='/' component={Home} />
            <Route path='/edit' component={Edit} />
        </>
    )
}
