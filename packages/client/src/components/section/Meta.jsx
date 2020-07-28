import React from 'react'
import PropTypes from 'prop-types'

export function Meta({ userId, id }) {
    return (
        <p className='is-size-7 has-text-right' data-testid='section-meta'>
            id: {id} | user: {userId}
        </p>
    )
}

Meta.propTypes = {
    userId: PropTypes.number,
    id: PropTypes.number,
}
