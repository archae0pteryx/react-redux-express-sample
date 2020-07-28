import React from 'react'
import PropTypes from 'prop-types'

export function Title ({ children }) {
    return <h4 className='title is-4' data-testid='section-title'>{children}</h4>
}

Title.propTypes = {
    children: PropTypes.node.isRequired,
}
