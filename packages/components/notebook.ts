import { h } from 'vue'
import Icon from '../icon'

import type { FunctionalComponent } from 'vue'
const d = 'M192 128v768h640V128H192zm-32-64h704a32 32 0 0132 32v832a32 32 0 01-32 32H160a32 32 0 01-32-32V96a32 32 0 0132-32z'

const Notebook = function (props: any) {
  return h(
    Icon,
    props,
    {
      default: () => h('path', { d }, null),
    },
  );
} as FunctionalComponent;

Notebook.displayName = 'Notebook';

export default Notebook;

