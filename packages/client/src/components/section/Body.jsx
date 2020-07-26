import React from 'react'
import PropTypes from 'prop-types'

export function Body({ body }) {
    return <p>{body}</p>
}

Body.propTypes = {
    body: PropTypes.string.isRequired,
}
