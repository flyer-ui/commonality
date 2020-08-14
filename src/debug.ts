import {formatDate} from './date'
export const config = {
  moduleName: 'Flyer-UI',
}

/**
 * @description 警告日志
 * @param {*} name
 * @param {*} msg
 */
export const warn = function (name: string, msg?: string) {
  if (console) {
    if (arguments.length === 1) {
      msg = name
      console.warn(`[${formatDate('hh:MM:ss',new Date())}][${config.moduleName}]`, msg)
    } else {
      console.warn(`[${formatDate('hh:MM:ss',new Date())}][${config.moduleName}.${name}]`, msg)
    }
  }
}

/**
 * @description 错误日志
 * @param {*} name
 * @param {*} msg
 */
export const error = function (name: string, msg?: string) {
  if (console) {
    if (arguments.length === 1) {
      msg = name
      console.error(`[${formatDate('hh:MM:ss',new Date())}][${config.moduleName}]`, msg)
    } else {
      console.error(`[${formatDate('hh:MM:ss',new Date())}][${config.moduleName}.${name}]`, msg)
    }
  }
}

/**
 * @description 打印日志
 * @param {*} name
 * @param {*} msg
 */
export const log = function (name: string, msg?: string) {
  if (console) {
    if (arguments.length === 1) {
      msg = name
      console.log(`[${formatDate('hh:MM:ss',new Date())}][${config.moduleName}]`, msg)
    } else {
      console.log(`[${formatDate('hh:MM:ss',new Date())}][${config.moduleName}.${name}]`, msg)
    }
  }
}
