import { mkdir, readFile, rm, writeFile } from 'node:fs/promises'
import { basename, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import camelcase from 'camelcase'
import consola from 'consola'
import { format, type BuiltInParserName } from 'prettier'
import { glob } from 'tinyglobby'

consola.info('generating vue components')
const pathComponents = resolve(import.meta.dirname, '../src/components')
await rm(pathComponents, { recursive: true, force: true })
await mkdir(pathComponents, { recursive: true })
const files = await getSvgFiles()

consola.info('generating vue files')
await Promise.all(files.map((file) => transformToVueComponent(file)))

consola.info('generating entry file')
await generateEntry(files)

function getSvgFiles() {
  const svgPackageJson = fileURLToPath(
    import.meta.resolve('@element-plus/icons-svg/package.json'),
  )
  return glob('*.svg', {
    cwd: resolve(svgPackageJson, '..'),
    absolute: true,
  })
}

function getName(file: string) {
  const filename = basename(file).replace('.svg', '')
  const componentName = camelcase(filename, { pascalCase: true })
  return {
    filename,
    componentName,
  }
}

function formatCode(code: string, parser: BuiltInParserName = 'typescript') {
  return format(code, {
    parser,
    semi: false,
    singleQuote: true,
  })
}

async function transformToVueComponent(file: string) {
  const content = await readFile(file, 'utf8')
  const { filename, componentName } = getName(file)
  const vue = await formatCode(
    `
<template>
${content}
</template>
<script lang="ts" setup>
defineOptions({
  name: ${JSON.stringify(componentName)}
})
</script>`,
    'vue',
  )
  writeFile(resolve(pathComponents, `${filename}.vue`), vue, 'utf8')
}

async function generateEntry(files: string[]) {
  const code = await formatCode(
    files
      .map((file) => {
        const { filename, componentName } = getName(file)
        return `export { default as ${componentName} } from './${filename}.vue'`
      })
      .join('\n'),
  )
  await writeFile(resolve(pathComponents, 'index.ts'), code, 'utf8')
}
