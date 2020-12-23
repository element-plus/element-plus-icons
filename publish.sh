#! /usr/bin/bash

rm -rf build
yarn build

cat package.json | grep -v '\"private\":' > build/package.json
cd build && npm pack
ver="$(cat package.json | grep -E -o '\"version\": \"(.+)\"' | cut -d'"' -f4)"
tarball="element-plus-icons-${ver}"

npm publish "./${tarball}.tgz"