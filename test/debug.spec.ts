import { warn, log, error, config } from '../src/debug'

beforeAll(() => {
  config.moduleName = 'MoonJS'
})

test('检验log函数', () => {
  log('测试一个日志')
  log('类型', '打印了一个日志')
  log('类型', '打印了一个日志', { name: '张三' })
})

test('检验warn函数', () => {
  warn('测试一个警告日志')
  warn('类型', '这个函数发生了警告')
  warn('类型', '这个函数发生了警告', { a: 1 })
})

test('检验error函数', () => {
  error('测试一个错误日志')
  error('类型', '这个函数发生了错误')
  error('类型', '这个函数发生了错误', new Error('发生了未知错误'))
})
