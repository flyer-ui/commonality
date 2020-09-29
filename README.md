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

## Common
| 方法名称 | 说明    | 参数  | 返回值   |
| -------- | ------- | ------- | --------------------------------- |
| preciseAddition |数值精确添加的方法|num1:number, num2:number|number|
| preciseReduce |数值精确减数的方法|num1:number, num2:number|number|

### Common 使用方法
```JS
import {preciseAddition,preciseReduce} from '@flyer-ui/commonality'
preciseAddition(0.1+0.2) // 0.3
preciseAddition(0.7,0.1) // 0.8
preciseReduce(1.5,1.2)   // 0.3
preciseReduce(0.3,0.2)   // 0.1
```

