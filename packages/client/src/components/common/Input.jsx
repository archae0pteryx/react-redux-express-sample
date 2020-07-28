import React from 'react'
import PropTypes from 'prop-types'

export function Input({
    type,
    name,
    value,
    placeholder,
    extraStyle,
    handleChange,
    label,
}) {
    return (
        <div className='field'>
            {label && (
                <label className='label has-text-left is-size-6' htmlFor={name}>
                    {label}
                </label>
            )}
            <input
                type={type}
                name={name}
                value={value}
                placeholder={placeholder}
                className={`input ${extraStyle}`}
                onChange={handleChange}
                data-testid='input'
            />
        </div>
    )
}

Input.propTypes = {
    type: PropTypes.string,
    extraStyle: PropTypes.string,
    handleChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    label: PropTypes.string,
}

Input.defautProps = {
    type: 'text',
    placeholder: '',
}
