import {
    isPlainObject,
    hasOwn,
    extend,
    deepClone,
    once,
    debounce,
    isString,
    format,
    formatCurrency
} from '../src/common'
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
    arry.forEach(()=>{log('测试debounce');fn(1,2)})
})

test('isString ?',done=>{
    expect(isString({})).toBe(false)
    expect(isString(true)).toBe(false)
    expect(isString('')).toBe(true)
    done()
})

test('format ?',done=>{
    expect(format('{1},{2}','a','b')).toBe('a,b')
    expect(format('{1},{2}')).toBe(undefined)
    expect(format(1,2)).toBe(undefined)
    expect(format('{0}',1)).toBe('{0}')
    done()
})

test('formatCurrency',done=>{
    expect(formatCurrency(142)).toBe('￥ 142')
    expect(formatCurrency(13542)).toBe('￥ 13,542')
    expect(formatCurrency(123242)).toBe('￥ 123,242')
    expect(formatCurrency(123456789)).toBe('￥ 123,456,789')
    expect(formatCurrency(123456789,'$')).toBe('$ 123,456,789')
    expect(formatCurrency('123456789','$')).toBe('$ 123,456,789')
    done()
})

