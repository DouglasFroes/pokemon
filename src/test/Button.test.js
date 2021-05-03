/* eslint-disable no-undef */
import { render, fireEvent } from '@testing-library/react'
import Button from '../components/Button'
import '@testing-library/jest-dom/extend-expect'

it('should render button', () => {
  const onClick = jest.fn()

  const { getByLabelText } = render(<Button onClick={onClick} label="test" />)

  const btnElement = getByLabelText('button-01')
  fireEvent.click(btnElement)

  expect(onClick).toHaveBeenCalled()
  expect(btnElement).toBeInTheDocument()
  expect(btnElement).toHaveTextContent('test')
})
