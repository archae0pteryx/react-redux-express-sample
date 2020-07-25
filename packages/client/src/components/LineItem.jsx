import React from 'react'
import PropTypes from 'prop-types'

export function LineItem ({ children }) {
    return (
        <li>{children}</li>
    )
}

LineItem.propTypes = {
    children: PropTypes.node.isRequired
}
