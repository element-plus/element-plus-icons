import { h } from 'vue'
import Icon from '../icon/icon'

import type { FunctionalComponent } from 'vue'
const d = 'M512 128v64H256a64 64 0 00-64 64v512a64 64 0 0064 64h512a64 64 0 0064-64V512h64v256a128 128 0 01-128 128H256a128 128 0 01-128-128V256a128 128 0 01128-128h256z'

const Notification = function (props: any) {
  return h(
    Icon,
    props,
    {
      default: () => h('path', { d }, null),
    },
  );
} as FunctionalComponent;

Notification.displayName = 'Notification';

export default Notification;

