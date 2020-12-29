import { h } from 'vue'
import Icon from '../icon/icon'

import type { FunctionalComponent } from 'vue'
const d = 'M595.2 128H320a192 192 0 00-192 192v576h384V352c0-90.496 32.448-171.2 83.2-224zM736 64c123.712 0 224 128.96 224 288S859.712 640 736 640H576v320H64V320A256 256 0 01320 64h416zM576 352v224h160c84.352 0 160-97.28 160-224s-75.648-224-160-224-160 97.28-160 224z'

const ToiletPaper = function (props: any) {
  return h(
    Icon,
    props,
    {
      default: () => h('path', { d }, null),
    },
  );
} as FunctionalComponent;

ToiletPaper.displayName = 'ToiletPaper';

export default ToiletPaper;

