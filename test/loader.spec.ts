import { loader } from '../src/loader'
import { log } from '../src/debug'

test('loader:检测加载js', () => {
  expect(loader('https://unpkg.com/flyer-ui/lib/index.js', () => {
    log('动态加载成功。。。')
  }))
})
