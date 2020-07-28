import React from 'react'
import { Title } from '../Title'
import { render, cleanup } from '@testing-library/react'

afterEach(cleanup)

describe('Title', () => {
    it('renders without crashing', () => {
        const { queryByTestId } = render(<Title>I am test</Title>)
        expect(queryByTestId('section-title')).toBeTruthy()
    })
})

