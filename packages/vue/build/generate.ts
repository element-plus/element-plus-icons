import path from 'path'
import { readFile, writeFile } from 'fs/promises'
import { emptyDir } from 'fs-extra'
import consola from 'consola'
import camelcase from 'camelcase'
import glob from 'fast-glob'
import { getPackageInfo } from 'local-pkg'
import { format } from 'prettier'
import chalk from 'chalk'
import { pathSrc } from './paths'
import type { BuiltInParserName } from 'prettier'

const getSvgFiles = async () => {
  const { rootPath } = await getPackageInfo('@element-plus/icons-svg')
  return glob('*.svg', { cwd: rootPath, absolute: true })
}

const getName = (file: string) => {
  const filename = path.basename(file).replace('.svg', '')
  const componentName = camelcase(filename, { pascalCase: true })
  return {
    filename,
    componentName,
  }
}

const formatCode = (code: string, parser: BuiltInParserName = 'typescript') =>
  format(code, {
    parser,
    semi: false,
    singleQuote: true,
  })

const transformToVueComponent = async (file: string) => {
  const content = await readFile(file, 'utf-8')
  const { filename, componentName } = getName(file)
  const vue = formatCode(
    `
<template>
${content}
</template>
<script lang="ts">
  import { defineComponent } from 'vue'
  export default defineComponent({
    name: "${componentName}",
  })
</script>`,
    'vue'
  )
  writeFile(path.resolve(pathSrc, `${filename}.vue`), vue, 'utf-8')
}

const generateEntry = async (files: string[]) => {
  const code = formatCode(
    files
      .map((file) => {
        const { filename, componentName } = getName(file)
        return `export { default as ${componentName} } from './${filename}.vue'`
      })
      .join('\n')
  )
  await writeFile(path.resolve(pathSrc, 'index.ts'), code, 'utf-8')
}

;(async () => {
  consola.info(chalk.blue('generating vue components'))
  await emptyDir(pathSrc)
  const files = await getSvgFiles()
  consola.info(chalk.blue('generating vue files'))
  await Promise.all(files.map((file) => transformToVueComponent(file)))
  consola.info(chalk.blue('generating entry file'))
  await generateEntry(files)
})()
