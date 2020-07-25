import React from 'react'
import ReactDOM from 'react-dom'
import {Root} from './Root'
import {RootErrorBoundary} from './components/RootErrorBoundry'

ReactDOM.render(<RootErrorBoundary><Root /></RootErrorBoundary>, document.getElementById('app'))
