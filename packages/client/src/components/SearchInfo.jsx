import React from 'react'
import PropTypes from 'prop-types'

const getSearchInfo = (filter, numFound, uniqueUsers) => {
    if (!filter) {
        return `Showing ${numFound} Entries by ${uniqueUsers} users`
    }
    if (numFound > 0) {
        return `Found ${numFound} result${numFound === 1 ? '' : 's'} from  ${uniqueUsers} user${uniqueUsers === 1 ? '' : 's'}`
    }
    return 'No Results'
}

export function SearchInfo({ filter, numFound, uniqueUsers }) {
    return <p className='is-size-5'>{getSearchInfo(filter, numFound, uniqueUsers)}</p>
}

SearchInfo.propTypes = {
    filter: PropTypes.string,
    numFound: PropTypes.number,
    uniqueUsers: PropTypes.number
}

SearchInfo.defaultProps = {
    filter: '',
    numFound: 0,
    uniqueUsers: 0
}
