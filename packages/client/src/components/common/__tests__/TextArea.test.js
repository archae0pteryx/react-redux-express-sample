import React from 'react'
import { TextArea } from '../TextArea'
import { render, cleanup } from '@testing-library/react'

afterEach(cleanup)

describe('TextArea', () => {
    it('renders without crashing', () => {
        const { getByText } = render(
            <TextArea name='test' value='test' label='test-label' handleChange={() => {}}/>
        )
        expect(getByText('test-label')).toBeTruthy()
    })
})

