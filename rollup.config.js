/*
 * @Author: pfzhengd
 * @Date: 2020-06-29 17:59:04
 * @LastEditors: pfzhengd
 * @LastEditTime: 2020-06-29 18:24:13
 * @Description: file content
 */ 
import typescript from 'rollup-plugin-typescript'

export default {
    input:'./src/index.ts',
    output:[
        {
            format:'umd',
            name:'commonality',
            file:'lib/index.umd.js'
        },
        {
            format:'cjs',
            file:'lib/index.cjs.js'
        },
        {
            format:'es',
            file:'lib/index.es.js'
        }
    ],
    plugins:[
        typescript(
            {
                exclude:'node_modules/**',
                typescript:require('typescript')
            }
        )
    ]
}