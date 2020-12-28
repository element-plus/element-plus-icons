#! /usr/bin/bash

# Do not run this file without setting the environment variables, you will end up fatal error
# If you wish to run this locally, please change the env variable before running this.
rm -rf build
node configs/rollup.js
sh scripts/build-comp.sh

cat package.json | grep -v '"version":' | sed "s/\(\"name\": \"@element-plus\/icons\"\)/\1,\n  \"version\": \"${TAG_VERSION}\"/g" > build/package.json

npm publish "./build" --registry ${REGISTRY}