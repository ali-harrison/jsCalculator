const express = require('express')
const Calculator = require('./calculator')

const app = express()
const calculator = new Calculator()

app.use(express.json())

app.post('/calculate', (req, res) => {
  const { operation, a, b } = req.body
  let result

  switch (operation) {
    case 'add':
      result = calculator.add(a, b)
      break
    case 'subtract':
      result = calculator.subtract(a, b)
      break
    case 'multiply':
      result = calculator.multiply(a, b)
      break
    case 'divide':
      try {
        result = calculator.divide(a, b)
      } catch (error) {
        return res.status(400).send(error.message)
      }
      break
    default:
      return res.status(400).send('Invalid operation')
  }

  res.json({ result })
})

module.exports = app
