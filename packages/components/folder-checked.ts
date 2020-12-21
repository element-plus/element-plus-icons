import { h } from 'vue'
import Icon from '../icon'

import type { FunctionalComponent } from 'vue'
const d = 'M128 192v640h768V320H485.76L357.504 192H128zm-32-64h287.872l128.384 128H928a32 32 0 0132 32v576a32 32 0 01-32 32H96a32 32 0 01-32-32V160a32 32 0 0132-32zm414.08 502.144l180.992-180.992L736.32 494.4 510.08 720.64l-158.4-158.336 45.248-45.312L510.08 630.144z'

const FolderChecked = function (props: any) {
  return h(
    Icon,
    props,
    {
      default: () => h('path', { d }, null),
    },
  );
} as FunctionalComponent;

FolderChecked.displayName = 'FolderChecked';

export default FolderChecked;

