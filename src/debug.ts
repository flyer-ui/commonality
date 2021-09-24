import { formatDate } from './date'
export const config = {
  moduleName: 'Flyer-UI'
}

function genPrefix ():string {
  return `[${formatDate('yyyy-MM-dd hh:mm:ss', new Date())}][${config.moduleName}]`
}

/**
 * @description 日志通用方法
 * @author pfzheng
 * @date 2021-05-07
 * @param {string} typeName 日志的类型
 * @param {...any} rest  附带信息
 */
function common (typeName:string, rest:Array<any>) {
  if (console) {
    if (rest.length === 1) {
      console[typeName](`${genPrefix()}`, rest[0])
    } else if (rest.length === 2) {
      console[typeName](`${genPrefix()}[${rest[0]}]`, rest[1])
    } else {
      console[typeName](`${genPrefix()}[${rest[0]}]`, rest[1], ...rest.slice(2))
    }
  }
}

/**
 * @description 警告日志
 * @param {*} name 第一个参数
 * @param {*} msg  第二个参数
 */
export const warn = function (...rest:any) {
  common('warn', rest)
}

/**
 * @description 错误日志
 * @param {*} name 第一个参数
 * @param {*} msg  第二个参数
 */
export const error = function (...rest:any) {
  common('error', rest)
}

/**
 * @description 打印日志
 * @param {*} name 第一个参数
 * @param {*} msg  第二个参数
 */
export const log = function (...rest:any) {
  common('log', rest)
}
