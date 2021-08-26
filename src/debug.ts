import { formatDate } from './date'
export const config = {
  moduleName: 'Flyer-UI'
}

/**
 * @description 日志通用方法
 * @author pfzheng
 * @date 2021-05-07
 * @param {string} typeName 日志的类型
 * @param {...any} rest  附带信息
 */
function common (typeName:string, name:string, msg?:string, ...rest:any) {
  if (console) {
    const args = Array.prototype.slice.call(arguments)
    if (args.length === 0) {
      return
    }
    if (args.length === 1) {
      msg = name
      console[typeName](
        `[${formatDate('hh:MM:ss', new Date())}][${config.moduleName}]`,
        rest[0]
      )
    } else if (rest.length === 2) {
      console[typeName](
        `[${formatDate('hh:MM:ss', new Date())}][${config.moduleName}.${rest[0]}]`,
        rest[1]
      )
    } else {
      console[typeName](
        `[${formatDate('hh:MM:ss', new Date())}][${config.moduleName}.${rest[0]}]`,
        rest[1],
        ...rest.slice(2)
      )
    }
  }
}

/**
 * @description 警告日志
 * @param {*} name 第一个参数
 * @param {*} msg  第二个参数
 */
export const warn = function (name: string, msg?: string, ...rest:any) {
  common('warn', name, msg, rest)
}

/**
 * @description 错误日志
 * @param {*} name 第一个参数
 * @param {*} msg  第二个参数
 */
export const error = function (name: string, msg?: string, ...rest:any) {
  common('error', name, msg, rest)
}

/**
 * @description 打印日志
 * @param {*} name 第一个参数
 * @param {*} msg  第二个参数
 */
export const log = function (name: string, msg?: string, ...rest:any) {
  common('log', name, msg, rest)
}
