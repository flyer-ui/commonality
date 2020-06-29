<!--
 * @Author: pfzhengd
 * @Date: 2020-06-29 18:00:40
 * @LastEditors: pfzhengd
 * @LastEditTime: 2020-06-29 18:20:15
 * @Description: file content
--> 
# commonality
项目开发中通用到的工具类

## Debug
1. warn 参数name：标记名称，msg：提示信息
2. log  参数name：标记名称，msg：提示信息
3. error 参数name：标记名称，msg：提示信息
4. config 配置信息:moduleName:提示中模块的名称，默认为flyer-ui

### 使用方法
```JS
npm install @flyer/commonality || yarn add @flyer/commonality

import {warn,log,error,config} from '@flyer-ui/commonality'
config.moduleName='module'

warn('name','msg') //[module.name] msg
warn('msg') //[module] msg

log('name','msg') //[module.name] msg
log('msg') //[module] msg

error('name','msg') //[module.name] msg
error('msg') //[module] msg
```
