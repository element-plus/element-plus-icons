import { h } from 'vue'
import Icon from '../icon/icon'

import type { FunctionalComponent } from 'vue'
const d = 'M186.496 544l41.408 41.344a32 32 0 11-45.248 45.312l-96-96a32 32 0 010-45.312l96-96a32 32 0 1145.248 45.312L186.496 480h290.816V186.432l-41.472 41.472a32 32 0 11-45.248-45.184l96-96.128a32 32 0 0145.312 0l96 96.064a32 32 0 01-45.248 45.184l-41.344-41.28V480H832l-41.344-41.344a32 32 0 0145.248-45.312l96 96a32 32 0 010 45.312l-96 96a32 32 0 01-45.248-45.312L832 544H541.312v293.44l41.344-41.28a32 32 0 1145.248 45.248l-96 96a32 32 0 01-45.312 0l-96-96a32 32 0 1145.312-45.248l41.408 41.408V544H186.496z'

const Rank = function (props: any) {
  return h(
    Icon,
    props,
    {
      default: () => h('path', { d }, null),
    },
  );
} as FunctionalComponent;

Rank.displayName = 'Rank';

export default Rank;

