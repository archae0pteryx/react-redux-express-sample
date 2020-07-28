import React from 'react'
import { Body } from '../Body'
import { render, cleanup } from '@testing-library/react'

afterEach(cleanup)

describe('Body', () => {
    it('renders without crashing', () => {
        const { queryByTestId } = render(<Body>I am test</Body>)
        expect(queryByTestId('section-body')).toBeTruthy()
    })
})

