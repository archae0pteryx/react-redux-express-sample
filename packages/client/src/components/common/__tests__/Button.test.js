import React from 'react'
import { Button } from '../Button'
import { render, cleanup } from '@testing-library/react'

afterEach(cleanup)

describe('Button', () => {
    it('renders without crashing', () => {
        const { getByText } = render(<Button>button</Button>)
        expect(getByText('button')).toBeTruthy()
    })
})
