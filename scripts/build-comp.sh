#! /usr/bin/bash

# finding all file under `packages/components`
# piping to rollup to config.
find packages/components -type f -name '*.ts' -print0 | \
xargs -P4 -0 -I {} node configs/rollup.comp.js {}

# after components build finished, build icon.ts as well.
node configs/rollup.comp.js ./packages/icon/icon.ts