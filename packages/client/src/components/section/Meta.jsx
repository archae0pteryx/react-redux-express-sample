import React from 'react'
import PropTypes from 'prop-types'

export function Meta({ userId, id }) {
    return (
        <div>
            <p>id: {id}</p>
            <p>user: {userId}</p>
        </div>
    )
}

Meta.propTypes = {
    userId: PropTypes.number,
    id: PropTypes.number,
}
