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