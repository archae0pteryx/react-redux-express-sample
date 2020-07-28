import React from 'react'
import PropTypes from 'prop-types'

export function TextArea({
    type,
    name,
    value,
    placeholder,
    extraStyle,
    handleChange,
    label,
    rows
}) {
    return (
        <div className='field'>
            {label && (
                <label className='label has-text-left is-size-6' htmlFor={name}>
                    {label}
                </label>
            )}
            <textarea
                type={type}
                name={name}
                value={value}
                placeholder={placeholder}
                className={`textarea ${extraStyle}`}
                onChange={handleChange}
                rows={rows}
                data-testid='textarea'
            />
        </div>
    )
}

TextArea.propTypes = {
    type: PropTypes.string,
    extraStyle: PropTypes.string,
    handleChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    label: PropTypes.string,
    rows: PropTypes.string
}

TextArea.defautProps = {
    type: 'text',
    placeholder: '',
    rows: '10'
}
