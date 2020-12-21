const path = require('path')
const rollup = require('rollup')
const typescript = require('rollup-plugin-typescript2')


rollup.rollup({
  input: path.resolve(__dirname, './packages/element-plus-icons/index.ts'),
  plugins: [typescript()],
  external: ['vue']
}).then(bundle => {
  bundle.write({
    file: path.resolve(__dirname, './build/index.js'),
    format: 'esm',
    name: 'icons',
    sourcemap: false,
  })
})