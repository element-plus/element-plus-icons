import path from 'path'
import { rollup } from 'rollup'
import chalk from 'chalk'
import esbuild from 'rollup-plugin-esbuild'
import vue from 'unplugin-vue/rollup'
import { emptyDir } from 'fs-extra'
import { pathOutput, pathSrc } from './paths'

const getBundle = (minify: boolean) =>
  rollup({
    input: [path.resolve(pathSrc, 'index.ts')],
    plugins: [
      vue(),
      esbuild({
        target: 'es2018',
        minify,
      }),
    ],
    external: ['vue'],
  })

const buildBundled = async (minify: boolean) => {
  const bundle = await getBundle(minify)
  const tasks = [
    bundle.write({
      format: 'iife',
      file: path.resolve(pathOutput, `index.iife${minify ? '.min' : ''}.js`),
      name: 'ElementPlusIconsVue',
      globals: { vue: 'Vue' },
    }),
  ]
  if (!minify)
    tasks.push(
      bundle.write({
        format: 'cjs',
        file: path.resolve(pathOutput, `index${minify ? '.min' : ''}.js`),
        globals: { vue: 'Vue' },
      }),
      bundle.write({
        format: 'esm',
        file: path.resolve(pathOutput, `index${minify ? '.min' : ''}.mjs`),
      })
    )
  await Promise.all(tasks)
}

const buildUnbundled = async () => {
  const bundle = await getBundle(false)
  bundle.write({
    format: 'es',
    dir: path.resolve(pathOutput, 'es'),
    preserveModules: true,
    entryFileNames: '[name].mjs',
  })
  bundle.write({
    format: 'cjs',
    dir: path.resolve(pathOutput, 'lib'),
    preserveModules: true,
    exports: 'named',
  })
}

;(async () => {
  console.info(chalk.blue('cleaning dist...'))
  await emptyDir(pathOutput)
  console.info(chalk.blue('building...'))
  await Promise.all([buildUnbundled(), buildBundled(true), buildBundled(false)])
})()
