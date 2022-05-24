import path from 'path'
import consola from 'consola'
import chalk from 'chalk'
import { build } from 'esbuild'
import GlobalsPlugin from 'esbuild-plugin-globals'
import vue from 'unplugin-vue/esbuild'
import { emptyDir } from 'fs-extra'
import { pathOutput, pathSrc } from './paths'
import type { BuildOptions, Format } from 'esbuild'

const buildBundle = async () => {
  const getBuildOptions = (format: Format) => {
    const options: BuildOptions = {
      entryPoints: [path.resolve(pathSrc, 'index.ts')],
      target: 'es2018',
      platform: 'neutral',
      plugins: [vue()],
      bundle: true,
      format,
    }
    if (format === 'iife') {
      options.plugins.push(
        GlobalsPlugin({
          vue: 'Vue',
        })
      )
    } else {
      options.external = ['vue']
    }

    return options
  }
  const doBuild = async (minify: boolean) => {
    await Promise.all([
      build({
        ...getBuildOptions('esm'),
        outfile: path.resolve(pathOutput, `index${minify ? '.min' : ''}.mjs`),
        minify,
        sourcemap: minify,
      }),
      build({
        ...getBuildOptions('iife'),
        outfile: path.resolve(
          pathOutput,
          `index.iife${minify ? '.min' : ''}.js`
        ),
        minify,
        sourcemap: minify,
      }),
      build({
        ...getBuildOptions('cjs'),
        outfile: path.resolve(pathOutput, `index${minify ? '.min' : ''}.js`),
        minify,
        sourcemap: minify,
      }),
    ])
  }

  return Promise.all([doBuild(true), doBuild(false)])
}

;(async () => {
  consola.info(chalk.blue('cleaning dist...'))
  await emptyDir(pathOutput)
  consola.info(chalk.blue('building...'))
  await buildBundle()
})()
