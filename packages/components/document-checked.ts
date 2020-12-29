import { h } from 'vue'
import Icon from '../icon/icon'

import type { FunctionalComponent } from 'vue'
const d = 'M805.504 320L640 154.496V320h165.504zM832 384H576V128H192v768h640V384zM160 64h480l256 256v608a32 32 0 01-32 32H160a32 32 0 01-32-32V96a32 32 0 0132-32zm318.4 582.144l180.992-180.992L704.64 510.4 478.4 736.64 320 578.304l45.248-45.312L478.4 646.144z'

const DocumentChecked = function (props: any) {
  return h(
    Icon,
    props,
    {
      default: () => h('path', { d }, null),
    },
  );
} as FunctionalComponent;

DocumentChecked.displayName = 'DocumentChecked';

export default DocumentChecked;

