import { h } from 'vue'
import Icon from '../icon'

import type { FunctionalComponent } from 'vue'
const d = 'M512 128a384 384 0 100 768 384 384 0 000-768zm0-64a448 448 0 110 896 448 448 0 010-896z'

const PictureRounded = function (props: any) {
  return h(
    Icon,
    props,
    {
      default: () => h('path', { d }, null),
    },
  );
} as FunctionalComponent;

PictureRounded.displayName = 'PictureRounded';

export default PictureRounded;

