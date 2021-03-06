import React from 'react'
import PropTypes from 'prop-types'
import { Error } from '../components/Error'

export class RootErrorBoundary extends React.Component {
    constructor (props) {
        super(props)
        this.state = { hasError: false }
    }

    static getDerivedStateFromError () {
        return { hasError: true }
    }

    componentDidCatch (error, errorInfo) {
    // eslint-disable-next-line no-undef
        console.error('🚨 Error caught in root boundary', { error, errorInfo })
    }

    render () {
        const { children } = this.props
        const { hasError } = this.state

        if (hasError) {
            return <Error />
        }

        return children
    }
}

RootErrorBoundary.propTypes = {
    children: PropTypes.node.isRequired,
}
