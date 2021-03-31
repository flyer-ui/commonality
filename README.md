<!--
 * @Author: pfzhengd
 * @Date: 2020-06-29 18:00:40
 * @LastEditors: pfzhengd
 * @LastEditTime: 2020-06-29 18:20:15
 * @Description: file content
--> 
# commonality
项目开发中通用到的工具类

## 安装
```js
npm install @flyer/commonality || yarn add @flyer/commonality
```

## 广播器（消息订阅）
1. 订阅广播 `subscribe:(channel: string, commit: Function):void`
2. 广播消息 `publish: (channel:string,data:Object):void`
3. 取消订阅广播 `unsubscribe: (channel: string):boolean`

### 实例方法
```JS
import {broadcaster} from '@flyer-ui/commonality'
const broadcaster = Broadcaster()
broadcaster.subscribe('114',(data)=>{
    log('收到广播回来的数据114-1',data)
})
broadcaster.subscribe('114',(data)=>{
    log('收到广播回来的数据114-2',data)
})
broadcaster.publish('114','data')
broadcaster.unsubscribe('114')
```

## Debug
1. warn 参数name：标记名称，msg：提示信息
2. log  参数name：标记名称，msg：提示信息
3. error 参数name：标记名称，msg：提示信息
4. config 配置信息:moduleName:提示中模块的名称，默认为flyer-ui

### Debug 使用方法
```JS
import {warn,log,error,config} from '@flyer-ui/commonality'
config.moduleName='module'

warn('name','msg') //[module.name] msg
warn('msg') //[module] msg

log('name','msg') //[module.name] msg
log('msg') //[module] msg

error('name','msg') //[module.name] msg
error('msg') //[module] msg

```

## 精度计算
| 方法名称 | 说明    | 参数  | 返回值   |
| -------- | ------- | ------- | --------------------------------- |
| preciseAddition |数值精确添加的方法|num1:number, num2:number|number|
| preciseReduce |数值精确减数的方法|num1:number, num2:number|number|

### 使用方法
```JS
import {preciseAddition,preciseReduce} from '@flyer-ui/commonality'
preciseAddition(0.1+0.2) // 0.3
preciseAddition(0.7,0.1) // 0.8
preciseReduce(1.5,1.2)   // 0.3
preciseReduce(0.3,0.2)   // 0.1
```

## 常用方法
1. 格式化字占位符，例如：”{1}，{2}“ `format(...rest: Array<any>): string | undefined `
2. 将数字进行货币格式化 `formatCurrency(value: string | number, unit: string = '￥'):string`
3. 可以生成并返回一个随机数的函数 `randomNumber():number`
4. 判断是否是 string 对象 `isString(obj: any): Boolean`
5. 防抖函数，使一个函数在一定期间高频率下只执行一次的办法。 
```JS
function debounce(
  event: Function = noop,
  wait: number = 50,
  immediately: boolean = false
): Function
```
~~6. 深度拷贝一个目标 `deepClone(target: object, source: object): object `<font color='red' size='2'>0.1.2版本后废除</font>~~  

6. 深拷贝对象 `deepClone(target:object):object`<font color='green' size='2'> >0.1.3有效</font>

7. 确保只执行一次函数 `function once(fn: Function): Function `
8. 混合对象里的属性到指定的对象上 `extend(to: object, _from: object): object`
9. 检测对象里是否包含有指定属性 `hasOwn(obj: object, key: string | number | symbol): boolean`
10. 判断对象是否是纯粹的对象类型 `isPlainObject(obj: object): boolean`
11. 执行一个空操作 `noop(...rest: [any]): void`

### 使用方法
```JS
import {
    isPlainObject,
    hasOwn,
    extend,
    deepClone,
    once,
    debounce,
    isString,
    format,
    formatCurrency,
    randomNumber
} from '@flyer-ui/commonality'
// 或者直接引用全部
// import common from '@flyer-ui/commonality'
// common.format()

isPlainObject([]) // false
hasOwn({a:1},'a') // true
extend({a:1},{b:2}) // {a:1,b:2}
const result = {} 
deepClone(result,{
    b:2,
    c:{
        c1:'2.1',
        c2:'2.2'
    },
    a:1,
    e:[1,2,3,4]
})  // {"b":2,"c":{"c1":"2.1","c2":"2.2"},"a":1,"e":[1,2,3,4]}
let counter = 0
const fn = once((a:number,b:number)=>{
    log('我只执行了一次。')
    counter += (a + b)
})
fn(1,2) // 3
fn(1,2) // 3

let counter = 0
const fn = debounce((a:number,b:number)=>{
    log(`debounce 我只执行了一次。${counter}`)
    counter ++
},1000)
const arry = [1,2,3,4]
arry.forEach(()=>{fn(1,2)}) //[23:11:44][Flyer-UI] debounce 我只执行了一次。0

isString({}) // false
format('{1},{2}','a','b') //a,b
formatCurrency(123456789.5) // ￥ 123,456,789.50
randomNumber() //随机不重复数字字符串
```

## 日期格式化
```JS
type TDate = {
  years: string | number
  months: string | number
  days: string | number
  hours: string | number
  minutes: string | number
  seconds: string | number
}
```
1. 格式化日期,format是格式化的格式，date是要格式化的日期 
```JS
formatDate(
  format: string,
  data: Date | string | number | TDate
):Date | string | number | TDate
```
2. 根据参数返回年月日时分秒对象,为空则返回当前时间 `getDate(param: string | number | Date): TDate `
3. 格式化日期,format是格式化的格式，date是要格式化的日期 
```JS
formatDate(
  format: string,
  data: Date | string | number | TDate
):Date | string | number | TDate
```
4. 填充时间,判断时间是否是十位数，不是则前位补0 `fullTime(time: string | number): string`
5. 获取两个时是的间隔，返回年月日时分秒 
`getDiffTime(start?: string | Date, end?: string | Date,diffTime:number = 0): TDate`
6. 获取时间差并指定显示的位数,参数num值设置了后，template模块字符串要从年到秒填全。
```JS
getDiffTimeDescription(
  start?: string | Date,
  end?: string | Date,
  diffTime:number = 0,
  num?: number,
  template?: string
): string | undefined
```

### 使用方法

```JS
import {
  fullTime,
  getDate,
  formatDate,
  TDate,
  getDiffTime,
  getDiffTimeDescription
} from '@flyer-ui/commonality'

fullTime(0) // 00
getDate('2020-07-10') // {years: 2020,months: 7,days: 10,hours: 8,minutes: 0,seconds: 0}
formatDate('yyyy-MM-dd','2020-08-02') // 2020-08-02
getDiffTime('1986-07-03 15:03:23','2020-08-03 18:02:01') 
// { years: 34, months: 1, days: 1, hours: 3, minutes: 58, seconds: 38 }
getDiffTimeDescription('1986-07-03 15:03:23','2020-08-03 18:02:01')
//34年1个月1日3小时58分38秒
```

## loader加载器
1. 可动态加载JS/CSS的加载器 `function loader(paths: string | Array<string>, callback: Function):void `

### 使用方法
```JS
loader('https://unpkg.com/flyer-ui/lib/index.js',()=>{
    log('动态加载成功。。。')
})
```

