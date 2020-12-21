import { h } from 'vue'
import Icon from '../icon'

import type { FunctionalComponent } from 'vue'
const d = 'M160 160v704h704V160H160zm-32-64h768a32 32 0 0132 32v768a32 32 0 01-32 32H128a32 32 0 01-32-32V128a32 32 0 0132-32z'

const Picture = function (props: any) {
  return h(
    Icon,
    props,
    {
      default: () => h('path', { d }, null),
    },
  );
} as FunctionalComponent;

Picture.displayName = 'Picture';

export default Picture;

