import { h } from 'vue'
import Icon from '../icon/icon'

import type { FunctionalComponent } from 'vue'
const d = 'M768 832a128 128 0 01-128 128H192A128 128 0 0164 832V384a128 128 0 01128-128v64a64 64 0 00-64 64v448a64 64 0 0064 64h448a64 64 0 0064-64h64z'

const CopyDocument = function (props: any) {
  return h(
    Icon,
    props,
    {
      default: () => h('path', { d }, null),
    },
  );
} as FunctionalComponent;

CopyDocument.displayName = 'CopyDocument';

export default CopyDocument;

