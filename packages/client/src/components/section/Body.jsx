import React from 'react'
import PropTypes from 'prop-types'

export function Body({ children }) {
    return <p className='subtitle' data-testid='section-body'>{children}</p>
}

Body.propTypes = {
    children: PropTypes.node.isRequired,
}
