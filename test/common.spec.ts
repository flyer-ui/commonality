/*
 * @Author: pfzhengd
 * @Date: 2020-06-29 17:59:04
 * @LastEditors: pfzhengd
 * @LastEditTime: 2020-06-30 12:08:54
 * @Description: file content
 */ 
import {isPlainObject,hasOwn,extend,deepClone,once,debounce} from '../src/common'
import {log} from '../src/debug'

test("isPlainObject ?", () => {
    expect(isPlainObject([])).toBe(false)
    expect(isPlainObject({})).toBe(true)
    expect(isPlainObject({a:2})).toBe(true)
});

test("hasOwn ?", () => {
    expect(hasOwn({a:1},'a')).toBe(true)
    expect(hasOwn([1,2,3],'b')).toBe(false)
    expect(hasOwn({},'__proto__')).toBe(false)
});

test('extend ?',()=>{
    const result = extend({a:1},{b:2})
    expect(hasOwn(result,'b')).toBe(true)
    log('result',JSON.stringify(result))
    expect(result['b']).toEqual(2)
    expect(result['a']).toEqual(1)
})

test('deepClone ?',()=>{
    const result = {} 
    deepClone(result,{
        b:2,
        c:{
            c1:'2.1',
            c2:'2.2'
        },
        a:1,
        e:[1,2,3,4]
    })
        
    expect(hasOwn(result,'c')).toBe(true)
    log('result',JSON.stringify(result))
    expect(hasOwn(result['c'],'c1')).toBe(true)
    expect(hasOwn(result['c'],'c2')).toBe(true)
    expect(hasOwn(result['c'],'c2')).toBe(true)
})

test('once ?',()=>{
    let counter = 0
    const fn = once((a:number,b:number)=>{
        log('我只执行了一次。')
        counter += (a + b)
    })
    fn(1,2)
    fn(1,2)
    expect(counter).toBe(3)
})

test('debounce ?',done=>{
    let counter = 0
    const fn = debounce((a:number,b:number)=>{
        log(`debounce 我只执行了一次。${counter}`)
        counter ++
        log('a + b = ',String(a+b))
        done()
    },1000)
    const arry = [1,2,3,4]
    arry.forEach(()=>{log('测试debounce');fn([1,2])})
})
