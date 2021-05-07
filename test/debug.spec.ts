/*
 * @Author: pfzhengd
 * @Date: 2020-06-29 15:52:51
 * @LastEditors: pfzhengd
 * @LastEditTime: 2020-06-29 17:38:00
 * @Description: 单元测试debug类
 */ 

 import {warn,log,error,config} from '../src/debug'

 beforeAll(()=>{
    config.moduleName = '测试模块'
 })

 test('检验log函数',()=>{
    expect(log("测试一个日志"))
    expect(log("函数名","打印了一个日志"))
    expect(log("函数名","打印了一个日志",{name:'张三'}))
 })

 test('检验warn函数',()=>{
     expect(warn("测试一个警告日志"))
     expect(warn("函数名","这个函数发生了警告"))
     expect(warn("函数名","这个函数发生了警告",{a:1}))
 })

 test('检验error函数',()=>{
    expect(error("测试一个错误日志"))
    expect(error("函数名","这个函数发生了错误"))
    expect(error("函数名","这个函数发生了错误",new Error('发生了未知错误')))
})