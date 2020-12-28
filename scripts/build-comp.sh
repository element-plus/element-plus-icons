#! /usr/bin/bash

find packages -mindepth 2 -type f -name '*.ts' -print0 | \
xargs -P4 -0 -I {} node configs/rollup.comp.js {}