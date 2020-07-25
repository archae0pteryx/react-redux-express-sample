import React from 'react'
import { render } from '@testing-library/react'
import Home from '../Home'
import { MockReduxStore } from '../../testHelpers/MockReduxStore'
import * as actions from '../../redux/actions'

jest.mock('../LineItem', () => ({
    // eslint-disable-next-line react/display-name
    LineItem: (props) => <x-LineItem data-testid='lineitem' {...props} />
}))

afterEach(() => jest.clearAllMocks())
describe('Home', () => {
    const getPosts = jest.spyOn(actions, 'getPosts').mockReturnValue(() => ([]))
    const defaultState = {
        posts: [{ title: 'test' }]
    }

    const defaultProps = {}

    // pass props or state to override
    const renderComponent = (props, state) => {
        return render(
            <MockReduxStore state={state || defaultState}>
                <Home {...defaultProps} {...props} />
            </MockReduxStore>
        )
    }

    test('renders posts', async () => {
        const { queryByTestId, getByText } = renderComponent()
        expect(await queryByTestId('lineitem')).toBeTruthy()
        expect(await getByText('test')).toBeTruthy()
    })

    test('gets posts', async () => {
        renderComponent()
        expect(getPosts).toHaveBeenCalledTimes(1)
    })
})
