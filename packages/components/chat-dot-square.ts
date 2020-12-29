import { h } from 'vue'
import Icon from '../icon/icon'

import type { FunctionalComponent } from 'vue'
const d = 'M273.536 736H800a64 64 0 0064-64V256a64 64 0 00-64-64H224a64 64 0 00-64 64v570.88L273.536 736zM296 800L147.968 918.4A32 32 0 0196 893.44V256a128 128 0 01128-128h576a128 128 0 01128 128v416a128 128 0 01-128 128H296z'

const ChatDotSquare = function (props: any) {
  return h(
    Icon,
    props,
    {
      default: () => h('path', { d }, null),
    },
  );
} as FunctionalComponent;

ChatDotSquare.displayName = 'ChatDotSquare';

export default ChatDotSquare;

