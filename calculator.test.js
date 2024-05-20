const Calculator = require('./calculator')

let calculator

beforeEach(() => {
  calculator = new Calculator()
})

test('adds two numbers', () => {
  expect(calculator.add(1, 2)).toBe(3)
})

test('subtracts two numbers', () => {
  expect(calculator.subtract(5, 3)).toBe(2)
})

test('multiplies two numbers', () => {
  expect(calculator.multiply(4, 3)).toBe(12)
})

test('divides two numbers', () => {
  expect(calculator.divide(10, 2)).toBe(5)
})

test('throws an error when dividing by zero', () => {
  expect(() => calculator.divide(10, 0)).toThrow(
    'Division by zero is not allowed'
  )
})
