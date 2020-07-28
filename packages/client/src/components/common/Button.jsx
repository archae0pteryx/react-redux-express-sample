import React from 'react'
import PropTypes from 'prop-types'

export function Button({ children, extraStyle, type, onClick }) {
    return (
        <button
            type={type}
            className={`button ${extraStyle}`}
            onClick={onClick}
            data-testid='btn'
        >
            {children}
        </button>
    )
}

Button.propTypes = {
    children: PropTypes.node.isRequired,
    extraStyle: PropTypes.string,
    type: PropTypes.string,
    onClick: PropTypes.func,
}

Button.defaultProps = {
    children: 'Pass Me Some Kids',
    extraStyle: 'is-success',
    type: 'default',
    onClick: () => {},
}
