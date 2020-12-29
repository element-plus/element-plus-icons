import { h } from 'vue'
import Icon from '../icon/icon'

import type { FunctionalComponent } from 'vue'
const d = 'M128 320v576h576V320H128zm-32-64h640a32 32 0 0132 32v640a32 32 0 01-32 32H96a32 32 0 01-32-32V288a32 32 0 0132-32zM960 96v704a32 32 0 01-32 32h-96v-64h64V128H384v64h-64V96a32 32 0 0132-32h576a32 32 0 0132 32zM256 672h320v64H256v-64zm0-192h320v64H256v-64z'

const DocumentCopy = function (props: any) {
  return h(
    Icon,
    props,
    {
      default: () => h('path', { d }, null),
    },
  );
} as FunctionalComponent;

DocumentCopy.displayName = 'DocumentCopy';

export default DocumentCopy;

