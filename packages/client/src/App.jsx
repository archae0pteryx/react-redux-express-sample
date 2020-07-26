import React from 'react'
import { Route } from 'react-router-dom'
import Home from './screens/Home'
import Post from './screens/Post'

export function App () {
    return (
        <div>
            <Route exact={true} path='/' component={Home} />
            <Route path='/post/:id' component={Post} />
        </div>
    )
}
