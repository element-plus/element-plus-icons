import { h } from 'vue'
import Icon from '../icon/icon'

import type { FunctionalComponent } from 'vue'
const d = 'M452.864 149.312a29.12 29.12 0 0141.728.064L826.24 489.664a32 32 0 010 44.672L494.592 874.624a29.12 29.12 0 01-41.728 0 30.592 30.592 0 010-42.752L764.736 512 452.864 192a30.592 30.592 0 010-42.688zm-256 0a29.12 29.12 0 0141.728.064L570.24 489.664a32 32 0 010 44.672L238.592 874.624a29.12 29.12 0 01-41.728 0 30.592 30.592 0 010-42.752L508.736 512 196.864 192a30.592 30.592 0 010-42.688z'

const DArrowRight = function (props: any) {
  return h(
    Icon,
    props,
    {
      default: () => h('path', { d }, null),
    },
  );
} as FunctionalComponent;

DArrowRight.displayName = 'DArrowRight';

export default DArrowRight;

