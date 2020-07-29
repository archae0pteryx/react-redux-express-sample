import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import * as actions from '../redux/actions'
import { Button, Input } from '../components/common'
import { SearchInfo } from './SearchInfo'

function SearchBar({ setFilter, filter, numFound, uniqueUsers }) {
    return (
        <div className='box'>
            <Input
                extraStyle='is-info'
                type='text'
                name='search'
                label='Search Posts by Title'
                placeholder='Search...'
                value={filter}
                handleChange={({ target: { value } }) => setFilter(value)}
            />
            <div className='buttons is-right'>
                <Button
                    extraStyle='is-danger is-outlined is-small mt-2'
                    onClick={() => setFilter('')}
                >
                    Clear Search
                </Button>
            </div>
            <div className='has-text-centered'>
                <SearchInfo
                    filter={filter}
                    uniqueUsers={uniqueUsers}
                    numFound={numFound}
                />
            </div>
        </div>
    )
}

SearchBar.propTypes = {
    setFilter: PropTypes.func.isRequired,
    filter: PropTypes.string.isRequired,
    numFound: PropTypes.number.isRequired,
    uniqueUsers: PropTypes.number.isRequired,
}

const mapStateToProps = (state) => ({
    filter: state.filter,
})

const mapDispatchToProps = (dispatch) => ({
    setFilter: (term) => dispatch(actions.setFilter(term)),
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar)
