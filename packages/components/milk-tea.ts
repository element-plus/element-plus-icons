import { h } from 'vue'
import Icon from '../icon'

import type { FunctionalComponent } from 'vue'
const d = 'M416 128V96a96 96 0 0196-96h128a32 32 0 110 64H512a32 32 0 00-32 32v32h320a96 96 0 0111.712 191.296l-39.68 581.056A64 64 0 01708.224 960H315.776a64 64 0 01-63.872-59.648l-39.616-581.056A96 96 0 01224 128h192zM276.48 320l39.296 576h392.448l4.8-70.784a224.064 224.064 0 0130.016-439.808L747.52 320H276.48zM224 256h576a32 32 0 100-64H224a32 32 0 000 64zm493.44 503.872l21.12-309.12a160 160 0 00-21.12 309.12z'

const MilkTea = function (props: any) {
  return h(
    Icon,
    props,
    {
      default: () => h('path', { d }, null),
    },
  );
} as FunctionalComponent;

MilkTea.displayName = 'MilkTea';

export default MilkTea;

