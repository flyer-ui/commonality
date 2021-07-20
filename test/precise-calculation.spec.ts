import { preciseAddition, preciseReduce, preciseMultiply, preciseDivide } from '../src/index'

test('preciseAddition', done => {
  expect(preciseAddition(0.1, 0.2)).toBe(0.3)
  expect(preciseAddition(0.7, 0.1)).toBe(0.8)
  done()
})

test('preciseReduce', done => {
  expect(preciseReduce(1.5, 1.2)).toBe(0.3)
  expect(preciseReduce(0.3, 0.2)).toBe(0.1)
  done()
})

test('preciseMultiply', done => {
  expect(preciseMultiply(19.9, 100)).toBe(1990)
  expect(preciseMultiply(0.8, 3)).toBe(2.4)
  done()
})

test('preciseDivide', done => {
  expect(preciseDivide(0.3, 0.1)).toBe(3)
  expect(preciseDivide(0.69, 10)).toBe(0.069)
  expect(preciseDivide(19.32, 1.05)).toBe(18.4)
  done()
})
