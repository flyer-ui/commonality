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
      console.warn(`[${config.moduleName}]`, msg)
    } else {
      console.warn(`[${config.moduleName}.${name}]`, msg)
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
      console.error(`[${config.moduleName}]`, msg)
    } else {
      console.error(`[${config.moduleName}.${name}]`, msg)
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
      console.log(`[${config.moduleName}]`, msg)
    } else {
      console.log(`[${config.moduleName}.${name}]`, msg)
    }
  }
}
