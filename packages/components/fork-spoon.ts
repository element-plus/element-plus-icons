import { h } from 'vue'
import Icon from '../icon/icon'

import type { FunctionalComponent } from 'vue'
const d = 'M256 410.304V96a32 32 0 0164 0v314.304a96 96 0 0064-90.56V96a32 32 0 0164 0v223.744a160 160 0 01-128 156.8V928a32 32 0 11-64 0V476.544a160 160 0 01-128-156.8V96a32 32 0 0164 0v223.744a96 96 0 0064 90.56zM672 572.48C581.184 552.128 512 446.848 512 320c0-141.44 85.952-256 192-256s192 114.56 192 256c0 126.848-69.184 232.128-160 252.48V928a32 32 0 11-64 0V572.48zM704 512c66.048 0 128-82.56 128-192s-61.952-192-128-192-128 82.56-128 192 61.952 192 128 192z'

const ForkSpoon = function (props: any) {
  return h(
    Icon,
    props,
    {
      default: () => h('path', { d }, null),
    },
  );
} as FunctionalComponent;

ForkSpoon.displayName = 'ForkSpoon';

export default ForkSpoon;

