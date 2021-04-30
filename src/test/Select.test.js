/* eslint-disable no-undef */
import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Select from '../components/Select'

const data = [
  {
    id: 1,
    title: 'test1'
  },
  {
    id: 2,
    title: 'test2'
  }
]

it('should render Select', () => {
  let test
  const { getByLabelText } = render(
    <Select data={data} placeholder="test" ref={test} />
  )

  const slcElement = getByLabelText('select-01')

  expect(slcElement).toBeInTheDocument()
  expect(slcElement).toHaveTextContent('test')
  expect(slcElement).toHaveTextContent('test2')
})
