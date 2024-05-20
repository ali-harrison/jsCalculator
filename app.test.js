const request = require('supertest')
const app = require('./app')

describe('Calculator API', () => {
  test('should add two numbers', async () => {
    const response = await request(app)
      .post('/calculate')
      .send({ operation: 'add', a: 1, b: 2 })
    expect(response.status).toBe(200)
    expect(response.body.result).toBe(3)
  })

  test('should subtract two numbers', async () => {
    const response = await request(app)
      .post('/calculate')
      .send({ operation: 'subtract', a: 5, b: 3 })
    expect(response.status).toBe(200)
    expect(response.body.result).toBe(2)
  })

  test('should multiply two numbers', async () => {
    const response = await request(app)
      .post('/calculate')
      .send({ operation: 'multiply', a: 4, b: 3 })
    expect(response.status).toBe(200)
    expect(response.body.result).toBe(12)
  })

  test('should divide two numbers', async () => {
    const response = await request(app)
      .post('/calculate')
      .send({ operation: 'divide', a: 10, b: 2 })
    expect(response.status).toBe(200)
    expect(response.body.result).toBe(5)
  })

  test('should return error for division by zero', async () => {
    const response = await request(app)
      .post('/calculate')
      .send({ operation: 'divide', a: 10, b: 0 })
    expect(response.status).toBe(400)
    expect(response.text).toBe('Division by zero is not allowed')
  })

  test('should return error for invalid operation', async () => {
    const response = await request(app)
      .post('/calculate')
      .send({ operation: 'invalid', a: 10, b: 2 })
    expect(response.status).toBe(400)
    expect(response.text).toBe('Invalid operation')
  })
})
