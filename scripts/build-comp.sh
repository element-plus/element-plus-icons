#! /usr/bin/bash

# finding all file under `packages/components`
# piping to rollup to config.
echo "build components"
find packages/components -type f -name '*.vue' -print0 | \
xargs -P4 -0 -I {} node configs/rollup.comp.js {}

yarn build:entry
# after components build finished, build icon.ts as well.
echo "generate type files"
yarn gen-dts
