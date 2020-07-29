import React from 'react'
import { Input } from '../Input'
import { render, cleanup } from '@testing-library/react'

afterEach(cleanup)

describe('Input', () => {
    it('renders without crashing', () => {
        const { getByText } = render(
            <Input name='test' value='test' label='test-label' handleChange={() => {}}/>
        )
        expect(getByText('test-label')).toBeTruthy()
    })
})

