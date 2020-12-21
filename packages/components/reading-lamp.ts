import { h } from 'vue'
import Icon from '../icon'

import type { FunctionalComponent } from 'vue'
const d = 'M352 896h320q32 0 32 32t-32 32H352q-32 0-32-32t32-32zM307.328 128l-99.52 448h608.384l-99.52-448H307.328zm-25.6-64h460.608a32 32 0 0131.232 25.088l113.792 512A32 32 0 01856.128 640H167.872a32 32 0 01-31.232-38.912l113.792-512A32 32 0 01281.664 64z'

const ReadingLamp = function (props: any) {
  return h(
    Icon,
    props,
    {
      default: () => h('path', { d }, null),
    },
  );
} as FunctionalComponent;

ReadingLamp.displayName = 'ReadingLamp';

export default ReadingLamp;

