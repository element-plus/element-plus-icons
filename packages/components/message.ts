import { h } from 'vue'
import Icon from '../icon'

import type { FunctionalComponent } from 'vue'
const d = 'M128 224v512a64 64 0 0064 64h640a64 64 0 0064-64V224H128zm0-64h768a64 64 0 0164 64v512a128 128 0 01-128 128H192A128 128 0 0164 736V224a64 64 0 0164-64z'

const Message = function (props: any) {
  return h(
    Icon,
    props,
    {
      default: () => h('path', { d }, null),
    },
  );
} as FunctionalComponent;

Message.displayName = 'Message';

export default Message;

