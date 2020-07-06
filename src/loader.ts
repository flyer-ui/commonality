import { noop } from './common'
import { warn } from './debug'

// 可动态加载JS/CSS的加载器
export function loader(paths: string | Array<string>, callback: Function) {
  if (typeof paths === 'string') {
    paths = [paths]
  }

  if (!Array.isArray(paths)) {
    warn('loader', 'The type of passed argument must be an Array or String.')
    return false
  }

  const cache: object = {}
  const head: HTMLHeadElement = document.querySelector('head')

  let index: number = 0
  callback = typeof callback === 'function' ? callback : noop

  paths.forEach((path: string) => {
    if (cache[path]) {
      return false
    }
    if (path.substr(-3) === '.js') {
      loadJS(path)
    } else if (path.substr(-4) === '.css') {
      loadCSS(path)
    }
  })

  function loadJS(path: string): void {
    const script: HTMLScriptElement = document.createElement('script')
    script.src = path
    script.type = 'text/javascript'
    head.appendChild(script)
    //@ts-ignore
    script.onload = script.onreadystatechange = function () {
      //@ts-ignore
      script.onload = script.onreadystatechange = null
      completed()
    }
    cache[path] = true
  }
  function loadCSS(path: string): void {
    const link: HTMLLinkElement = document.createElement('link')
    link.rel = 'stylesheet'
    link.type = 'text/css'
    link.href = path
    head.appendChild(link)
    //@ts-ignore
    link.onload = link.onreadystatechange = function () {
      //@ts-ignore
      link.onload = link.onreadystatechange = null
      completed()
    }
    cache[path] = true
  }
  function completed(): void {
    index++
    if (index === paths.length) {
      callback.apply(null)
    }
  }
}
