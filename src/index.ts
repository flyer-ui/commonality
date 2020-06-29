/*
 * @Author: pfzhengd
 * @Date: 2020-06-29 17:59:04
 * @LastEditors: pfzhengd
 * @LastEditTime: 2020-06-29 18:42:33
 * @Description: file content
 */ 

const version:string = '0.0.1'

export * from './debug'

export default ():string=>{
    return `The current version is ${version}`
}