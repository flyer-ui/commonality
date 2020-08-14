import { error } from './debug'

export const hasOwnProperty = Object.prototype.hasOwnProperty
export const _toString = Object.prototype.toString
export const slice = Array.prototype.slice

export const emptyObject: Readonly<{}> = Object.freeze({})

/**
 * 执行一个空操作
 *
 * @export
 * @param {any} args
 */
export function noop(...rest: [any]): void {}

/**
 *一个精确添加的方法，思路参考:https://github.com/camsong/blog/issues/9
 *
 * @export
 * @param {number} [num1=0]
 * @param {number} [num2=0]
 * @returns
 */
export function preciseAddition(num1: number = 0, num2: number = 0): number {
  const num1Mantissa = (num1.toString().split('.')[1] || '').length
  const num2Mantissa = (num1.toString().split('.')[1] || '').length
  const baseNum = Math.pow(10, Math.max(num1Mantissa, num2Mantissa))
  return (num1 * baseNum + num2 * baseNum) / baseNum
}

/**
 *一个精确减法的方法，思路参考:https://github.com/camsong/blog/issues/9
 *
 * @export
 * @param {number} [num1=0]
 * @param {number} [num2=0]
 * @returns
 */
export function preciseReduce(num1: number = 0, num2: number = 0): number {
  const num1Mantissa = (num1.toString().split('.')[1] || '').length
  const num2Mantissa = (num1.toString().split('.')[1] || '').length
  const baseNum = Math.pow(10, Math.max(num1Mantissa, num2Mantissa))
  return (num1 * baseNum - num2 * baseNum) / baseNum
}

/**
 * 判断对象是否是纯粹的对象类型
 *
 * @export
 * @param {*} obj
 * @returns
 */
export function isPlainObject(obj: object): boolean {
  if (_toString.call(obj) === '[object Object]') {
    return true
  }
  return false
}

/**
 *  检测对象里是否包含有指定属性
 *
 * @export
 * @param {Object} obj
 * @param {String} key
 * @returns Boolean
 */
export function hasOwn(obj: object, key: string | number | symbol): boolean {
  return hasOwnProperty.call(obj, key)
}

/**
 *  混合对象里的属性到指定的对象上
 *
 * @export
 * @param {Object} to
 * @param {Object} _from
 * @returns Object
 */
export function extend(to: object, _from: object): object {
  for (const key in _from) {
    to[key] = _from[key]
  }
  return to
}

/**
 * 确保只执行一次函数
 *
 * @export
 * @param {Function} fn
 * @returns Function
 */
export function once(fn: Function): Function {
  let called = false
  return function (...rest: [any]): void {
    if (!called) {
      called = true
      fn.apply(this, rest)
    }
  }
}

/**
 * 深度拷贝一个目标
 *
 * @export
 * @param {any} target
 * @returns any
 */
export function deepClone(target: object, source: object): object {
  for (const key in source) {
    const dataType = _toString.call(source[key])
    if (dataType === '[object Object]') {
      target[key] = {}
      deepClone(target[key], source[key])
    } else if (dataType === '[object Array]') {
      target[key] = []
      deepClone(target[key], source[key])
    } else {
      target[key] = source[key]
    }
  }
  return target
}

/**
 *  防抖函数，使一个函数在一定期间高频率下只执行一次的办法。
 *
 * @export
 * @param {Function} event
 * @param {Number} wait
 * @param {Boolean} immediately
 * @returns
 */
export function debounce(
  event: Function = noop,
  wait: number = 50,
  immediately: boolean = false
): Function {
  let timer: NodeJS.Timeout | null = null
  let called: boolean = false

  return function (...rest: [any]): void {
    if (timer) {
      clearTimeout(timer)
      timer = null
    }
    if (immediately && !called) {
      event.call(this, ...rest)
      called = true
    } else {
      timer = setTimeout(() => {
        event.call(this, ...rest)
      }, wait)
    }
  }
}

/**
 *
 * 判断是否是 string 对象
 * @param {any} obj
 * @returns
 */
export function isString(obj: any): Boolean {
  return typeof obj === 'string'
}

/**
 * @description 格式化字占位符，例如：”{1}，{2}“
 * @author pfzheng
 * @date 2020-08-04
 * @export
 * @returns {(string | undefined)}
 */
export function format(...rest: Array<any>): string | undefined {
  const args: Array<any> = slice.call(rest)
  const len: number = args.length
  if (len > 1) {
    let str: string = args[0]

    if (!isString(str)) {
      error('The first value in the parameters must be a string type.')
      return undefined
    }

    for (let i: number = 1; i < len; i++) {
      str = str.replace(new RegExp('\\{' + i + '\\}', 'g'), args[i])
    }
    return str
  } else {
    return undefined
  }
}

export function formatCurrency(value: string | number, unit: string = '￥') {
  return `${unit} ${value}`.replace(/\B(?=(\d{3})+(?!\d))/gi, ',')
}
