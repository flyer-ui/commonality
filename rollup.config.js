/*
 * @Author: pfzhengd
 * @Date: 2020-06-29 17:59:04
 * @LastEditors: pfzhengd
 * @LastEditTime: 2020-06-29 18:24:13
 * @Description: file content
 */ 
import typescript from 'rollup-plugin-typescript'

export default ()=>{
    const template = function(fileName){
        return {
            input:`./src/${fileName}.ts`,
            output:[
                {
                    format:'umd',
                    name:'commonality',
                    file:`lib/${fileName}.umd.js`
                },
                {
                    format:'cjs',
                    file:`lib/${fileName}.cjs.js`
                },
                {
                    format:'es',
                    file:`lib/${fileName}.es.js`
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
    }

    const moduleNames = ['index','debug','loader','common']
    const config = []

    moduleNames.forEach((mouldeName)=>{
        config.push(template(mouldeName))
    })
    return config
}