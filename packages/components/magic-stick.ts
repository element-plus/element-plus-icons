import { h } from 'vue'
import Icon from '../icon/icon'

import type { FunctionalComponent } from 'vue'
const d = 'M512 64h64v192h-64V64zm0 576h64v192h-64V640zM160 480v-64h192v64H160zm576 0v-64h192v64H736zM249.856 199.04l45.248-45.184L430.848 289.6 385.6 334.848 249.856 199.104zM657.152 606.4l45.248-45.248 135.744 135.744-45.248 45.248L657.152 606.4zM114.048 923.2L68.8 877.952l316.8-316.8 45.248 45.248-316.8 316.8zM702.4 334.848L657.152 289.6l135.744-135.744 45.248 45.248L702.4 334.848z'

const MagicStick = function (props: any) {
  return h(
    Icon,
    props,
    {
      default: () => h('path', { d }, null),
    },
  );
} as FunctionalComponent;

MagicStick.displayName = 'MagicStick';

export default MagicStick;

