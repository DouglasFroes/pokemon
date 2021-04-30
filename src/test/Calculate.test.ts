import '@testing-library/jest-dom/extend-expect'
import { calculateCallValue } from '../utils/calculate'

it('should render Select', () => {
  const result = calculateCallValue(60, 170, 80)

  expect(result).toBeTruthy()
  expect(result.withPlan).toEqual('37,40')
  expect(result.withoutPlan).toEqual('136,00')
})
