import React from 'react'
import { Meta } from '../Meta'
import { render, cleanup } from '@testing-library/react'

afterEach(cleanup)

describe('Meta', () => {
    it('renders without crashing', () => {
        const { queryByTestId } = render(<Meta>I am test</Meta>)
        expect(queryByTestId('section-meta')).toBeTruthy()
    })
})

