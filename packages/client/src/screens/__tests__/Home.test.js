import React from 'react'
import { render, cleanup } from '@testing-library/react'
import { MockReduxStore } from '../../testHelpers/MockReduxStore'
import * as actions from '../../redux/actions'
import Home from '../Home'

jest.mock('../../components', () => ({
    // eslint-disable-next-line react/display-name
    SearchBar: (props) => <x-SearchBar data-testid='searchbar' {...props} />
}))

jest.mock('../../containers', () => ({
    // eslint-disable-next-line react/display-name
    PostList: (props) => <x-PostList data-testid='postlist' {...props} />
}))

afterEach(() => {
    jest.clearAllMocks()
    cleanup()
})

describe('Home', () => {
    const getPosts = jest.spyOn(actions, 'getPosts').mockReturnValue(() => ([]))

    const defaultState = {
        posts: [{ title: 'test', userId: 1 }],
        filter: '',
        init: false,
        loading: false,
    }

    const defaultProps = {}

    const renderComponent = (props, state) => {
        return render(
            <MockReduxStore state={state || defaultState}>
                <Home {...defaultProps} {...props} />
            </MockReduxStore>
        )
    }

    test('renders without crashing', async () => {
        const { queryByTestId } = renderComponent()
        expect(await queryByTestId('searchbar')).toBeTruthy()
        expect(await queryByTestId('postlist')).toBeTruthy()
    })

    test('gets posts', async () => {
        renderComponent()
        expect(getPosts).toHaveBeenCalledTimes(1)
    })

    test('doesnt get posts if initialized', () => {
        renderComponent(null, { init: true, filter: '', posts: [], loading: false })
        expect(getPosts).toHaveBeenCalledTimes(0)
    })
})
