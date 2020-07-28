import React from 'react'
import { TextArea } from '../TextArea'
import { render, cleanup } from '@testing-library/react'

afterEach(cleanup)

describe('TextArea', () => {
    it('renders without crashing', () => {
        const { queryByTestId } = render(
            <TextArea name='test' value='test' handleChange={() => {}}>TextArea</TextArea>
        )
        expect(queryByTestId('textarea')).toBeTruthy()
    })
})

