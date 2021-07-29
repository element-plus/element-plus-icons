const fs = require('fs')
const path = require('path')
const chalk = require('chalk')
const { optimize } = require('svgo')

const ROOT = path.resolve(__dirname, '../source')
const outDir = path.resolve(__dirname, '../packages/components')

const config = {
  plugins: [
    'cleanupAttrs',
    'removeDoctype',
    'removeXMLProcInst',
    'removeComments',
    'removeMetadata',
    'removeTitle',
    'removeDesc',
    'removeUselessDefs',
    'removeEditorsNSData',
    'removeEmptyAttrs',
    'removeHiddenElems',
    'removeEmptyText',
    'removeEmptyContainers',
    // 'removeViewBox',
    'cleanupEnableBackground',
    'convertStyleToAttrs',
    'convertColors',
    'convertPathData',
    'convertTransform',
    'removeUnknownsAndDefaults',
    'removeNonInheritableGroupAttrs',
    'removeUselessStrokeAndFill',
    'removeUnusedNS',
    'cleanupIDs',
    'cleanupNumericValues',
    'moveElemsAttrsToGroup',
    'moveGroupAttrsToElems',
    'collapseGroups',
    // 'removeRasterImages',
    'mergePaths',
    'convertShapeToPath',
    'sortAttrs',
    'removeDimensions',
    { name: 'removeAttrs', params: { attrs: '(stroke|fill|class)' } },
    {
      name: 'addAttrs',
      type: 'perItem',
      fn(ast) {
        const { type, name } = ast
        if (type === 'element' && name === 'path') {
          ast.attributes.stroke = 'currentColor'
          ast.attributes.fill = 'none'
        }
      }
    }
  ],
};

// maybe consider using gulp here to do sequential operations
// without implementation chaining function
function main() {
  const icons = fs.readdirSync(ROOT)

  return Promise.all(icons.map(icon => transform(icon)))
}

async function transform(filename) {
  console.log(chalk.cyan(`Start building: ${filename}`))

  const content = await fs.promises.readFile(path.resolve(ROOT, filename), {
    encoding: 'utf-8',
  })

  const basename = filename
    .split('.svg')
    .shift()

  const componentName = basename.split('-')
    .map(capitalizeInitial)
    .join('')

  const optimized = optimize(content, config)

  // TODO: make this generic and pipe-able for generating
  // reusable code like ant design icon does.
  const transformed = transformToVue3(optimized.data, componentName)
  return writeToDisk(transformed, componentName).then(() => {
    indexContent.push(
      `export { default as ${componentName} } from './${componentName}.vue'`
    )
  })
  // return Promise.resolve(transformed)
}

function writeToDisk(content, componentName, extension = 'vue') {
  const targetFile = path.resolve(outDir, `./${componentName}.${extension}`)

  return fs.promises.writeFile(targetFile, content, {
    encoding: 'utf-8'
  })
}

function capitalizeInitial(s) {
  return s[0].toUpperCase() + s.slice(1)
}

function transformToVue3(content, componentName) {
  // this is a rather arbitrary
  return `
<template>
  ${content}
</template>
<script lang="ts">
  import { defineComponent } from 'vue'
  export default defineComponent({
    name: "${componentName}",
  })
</script>
  `
}

const indexContent = []

main().then(() => {

  const index = indexContent.join('\n')
  return writeToDisk(index, 'index', 'ts')
}).then(() => {
  console.log('generate icons finished')
})
