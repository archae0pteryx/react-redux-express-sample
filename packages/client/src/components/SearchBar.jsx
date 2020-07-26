import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import * as actions from '../redux/actions'

function SearchBar({ setFilter, filter, numFound }) {
    return (
        <div>
            <input
                type='text'
                name='search'
                placeholder='Search By Title'
                value={filter}
                onChange={({ target: { value } }) => setFilter(value)}
            />
            {filter && numFound && <p>Found {numFound} results</p>}
        </div>
    )
}

SearchBar.propTypes = {
    setFilter: PropTypes.func.isRequired,
    filter: PropTypes.string.isRequired,
    numFound: PropTypes.number.isRequired,
}

const mapStateToProps = (state) => ({
    filter: state.filter,
})

const mapDispatchToProps = (dispatch) => ({
    setFilter: (term) => dispatch(actions.setFilter(term)),
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar)
