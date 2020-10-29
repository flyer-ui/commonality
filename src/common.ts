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
  let timeout: NodeJS.Timeout | null = null
  let called: boolean = false

  return function (...rest: [any]): void {
    if (timeout) {
      clearTimeout(timeout)
      timeout = null
    }
    if (immediately && !called) {
      event.call(this, ...rest)
      called = true
    } else {
      timeout = setTimeout(() => {
        event.call(this, ...rest)
        timeout = null
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

/**
 * @description 将数字进行货币格式化
 * @param value 要进行货币格式化的数字（支持String类型和Number类型）
 * @param unit 格式化货币的单元，默认是中国货币符号￥
 */
export function formatCurrency(value: string | number, unit: string = '￥') {
  // 如果值的类型为undefined / null 直接返回空字符串。
  if(value === undefined || value === null){
    return ''
  }
  let [integer,decimal] = value.toString().split('.')
  decimal = decimal?('.'+decimal):'.00'
  decimal = decimal.length === 2 ? (decimal+'0'):decimal
  return `${unit} ${integer}`.replace(/\B(?=(\d{3})+(?!\d))/gi, ',') + `${decimal}`
}
