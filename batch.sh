#! /usr/bin/bash

gen(){
  # echo $1
p="$(cat ${1} | grep -o -E "d=\"(.+)\"" | cut -d '"' -f 2)"
# echo $p
filename="$(basename -- ${1} | cut -d '.' -f 1)"
mkdir "packages/$filename"
cat << EOF > "packages/$filename/index.ts"
import { h } from 'vue'
import Icon from '../icon'

import type { FunctionalComponent } from 'vue'
const d = '$2'

const TestIcon = function (props: any) {
  return h(
    Icon,
    { 
      xmlns: 'http://www.w3.org/2000/svg',
      viewBox: '0 0 1024 1024',
      ...props,
    },
    {
      default: () => h('path', { d }, null),
    },
  );
} as FunctionalComponent;

TestIcon.displayName = '$filename';

export default $filename;

EOF

}

export -f gen
find . -name *.svg | xargs -I {} bash -c 'gen "$@"' _ {}

# for FILE_NAME in "$(; do
# echo $FILE_NAME

#   # p="$(cat ${FILE_NAME} | grep -o -E "d=\"(.+)\"" | cut -d '"' -f 2)"
#   # filename="$(basename -- ${FILE_NAME} | cut -d '.' -f 1)"
#   # generate $filename $p
# done
