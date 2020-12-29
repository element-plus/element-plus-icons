#! /usr/bin/bash

# Do not run this file without setting the environment variables, you will end up fatal error
# If you wish to run this locally, please change the env variable before running this.
# do clean job before build started
rm -rf build
# build full bundle.
node configs/rollup.js
# build individual component
sh scripts/build-comp.sh
# rule out version field from `package.json`
# replace with `env.TAG_VERSION` from Github Action
cat package.json | grep -v '"version":' | sed "s/\(\"name\": \"@element-plus\/icons\"\)/\1,\n  \"version\": \"${TAG_VERSION}\"/g" > build/package.json
# Publish
npm publish "./build" --registry ${REGISTRY}