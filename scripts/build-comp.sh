#! /usr/bin/bash

find packages/components -type f -name '*.ts' -print0 | \
xargs -P4 -0 -I {} node configs/rollup.comp.js {}

node configs/rollup.comp.js ./packages/icon/icon.ts