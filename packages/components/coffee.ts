import { h } from 'vue'
import Icon from '../icon/icon'

import type { FunctionalComponent } from 'vue'
const d = 'M822.592 192h14.272a32 32 0 0131.616 26.752l21.312 128A32 32 0 01858.24 384h-49.344l-39.04 546.304A32 32 0 01737.92 960H285.824a32 32 0 01-32-29.696L214.912 384H165.76a32 32 0 01-31.552-37.248l21.312-128A32 32 0 01187.136 192h14.016l-6.72-93.696A32 32 0 01226.368 64h571.008a32 32 0 0131.936 34.304L822.592 192zm-64.128 0l4.544-64H260.736l4.544 64h493.184zm-548.16 128H820.48l-10.688-64H214.208l-10.688 64h6.784zm68.736 64l36.544 512H708.16l36.544-512H279.04z'

const Coffee = function (props: any) {
  return h(
    Icon,
    props,
    {
      default: () => h('path', { d }, null),
    },
  );
} as FunctionalComponent;

Coffee.displayName = 'Coffee';

export default Coffee;

