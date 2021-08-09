import typescript from 'rollup-plugin-typescript'
import dts from 'rollup-plugin-dts'

export default () => {
  const template = function (fileName) {
    return {
      input: `./src/${fileName}.ts`,
      output: [
        {
          format: 'umd',
          name: 'commonality',
          file: `lib/${fileName}.umd.js`
        },
        {
          format: 'cjs',
          file: `lib/${fileName}.cjs.js`
        },
        {
          format: 'es',
          file: `lib/${fileName}.es.js`
        }
      ],
      plugins: [
        typescript(
          {
            exclude: 'node_modules/**',
            typescript: require('typescript')
          }
        )
      ]
    }
  }

  const moduleNames = ['index', 'debug', 'loader', 'common', 'broadcaster', 'dom', 'date', 'precies-calculation']
  const config = []

  moduleNames.forEach((mouldeName) => {
    config.push(template(mouldeName))
  })

  config.push({
    input: './src/index.ts',
    output: [{ file: 'lib/types/index.d.ts', format: 'es' }],
    plugins: [dts()]
  })
  return config
}
