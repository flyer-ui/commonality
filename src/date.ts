import {error} from './debug'
import {isString} from './common'

export type TDate = {
    year: string | number,
    month: string | number,
    day: string | number,
    hours: string | number,
    minutes: string | number,
    seconds: string | number
  }

/**
 * @description 格式化日期,format是格式化的格式，date是要格式化的日期
 * @author pfzheng
 * @date 2020-08-03
 * @export
 * @param {string} format
 * @param {(Date|string)} data
 * @returns 
 */
export function formatDate(format:string, data:Date|string) {
  if (typeof format !== 'string') {
    error('format is not defined.')
    return false
  }
  const date:TDate = this.getDate(data)
  return format
    .replace(/yyyy/gi, date.year.toString())
    .replace(/mm/, fullTime(date.month))
    .replace(/dd/gi, fullTime(date.day))
    .replace(/hh/gi, fullTime(date.hours))
    .replace(/MM/, fullTime(date.minutes))
    .replace(/ss/gi, fullTime(date.seconds))
}

/**
 * @description 根据参数返回年月日时分秒对象,为空则返回当前时间
 * @author pfzheng
 * @date 2020-08-03
 * @export
 * @param {(string|Date)} param
 * @returns {TDate}
 */
export function getDate(param:string|Date):TDate {
  const date:Date = isString(param) ? new Date(param) : param as Date || new Date()
  return {
    year: date.getFullYear(),
    month: date.getMonth() + 1,
    day: date.getDate(),
    hours: date.getHours(),
    minutes: date.getMinutes(),
    seconds: date.getSeconds(),
  }
}

/**
 * @description 填充时间,判断时间是否是十位数，不是则前位补0
 * @author pfzheng
 * @date 2020-08-03
 * @export
 * @param {string} time
 * @returns {string}
 */
export function fullTime(time:string | number):string {
    let value:number
    if(isString(time)){
        value = parseInt(time as string)
    }
    value = time as number
  return (value >= 10 ? value : '0' + value).toString()
}
