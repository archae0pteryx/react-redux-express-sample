import React from 'react'
import PropTypes from 'prop-types'
import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

const mockStore = configureStore([thunk])

export const MockReduxStore = ({ children, state }) => {
    const store = mockStore(state)
    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}

MockReduxStore.propTypes = {
    children: PropTypes.node.isRequired,
    state: PropTypes.object.isRequired
}
