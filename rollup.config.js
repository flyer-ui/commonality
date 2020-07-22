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

    const moduleNames = ['index','debug','loader','common','broadcaster','dom']
    const config = []

    moduleNames.forEach((mouldeName)=>{
        config.push(template(mouldeName))
    })
    return config
}