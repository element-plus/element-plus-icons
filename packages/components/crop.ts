import { h } from 'vue'
import Icon from '../icon'

import type { FunctionalComponent } from 'vue'
const d = 'M256 768h672a32 32 0 110 64H224a32 32 0 01-32-32V96a32 32 0 0164 0v672z'

const Crop = function (props: any) {
  return h(
    Icon,
    props,
    {
      default: () => h('path', { d }, null),
    },
  );
} as FunctionalComponent;

Crop.displayName = 'Crop';

export default Crop;

