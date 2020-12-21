import { h } from 'vue'
import Icon from '../icon'

import type { FunctionalComponent } from 'vue'
const d = 'M288 896h448q32 0 32 32t-32 32H288q-32 0-32-32t32-32z'

const DeleteLocation = function (props: any) {
  return h(
    Icon,
    props,
    {
      default: () => h('path', { d }, null),
    },
  );
} as FunctionalComponent;

DeleteLocation.displayName = 'DeleteLocation';

export default DeleteLocation;

