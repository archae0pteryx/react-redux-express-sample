import React from 'react'
import { Input } from '../Input'
import { render, cleanup } from '@testing-library/react'

afterEach(cleanup)

describe('Input', () => {
    it('renders without crashing', () => {
        const { queryByTestId } = render(
            <Input name='test' value='test' handleChange={() => {}}>Input</Input>
        )
        expect(queryByTestId('input')).toBeTruthy()
    })
})

