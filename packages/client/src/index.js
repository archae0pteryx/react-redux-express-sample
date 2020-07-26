import React from 'react'
import ReactDOM from 'react-dom'
import { Root } from './Root'
import { RootErrorBoundary } from './containers/RootErrorBoundry'

ReactDOM.render(<RootErrorBoundary><Root /></RootErrorBoundary>, document.getElementById('app'))
