import { h } from 'vue'
import Icon from '../icon'

import type { FunctionalComponent } from 'vue'
const d = 'M736 504a56 56 0 110-112 56 56 0 010 112zm-224 0a56 56 0 110-112 56 56 0 010 112zm-224 0a56 56 0 110-112 56 56 0 010 112zM128 128v640h192v160l224-160h352V128H128z'

const Comment = function (props: any) {
  return h(
    Icon,
    props,
    {
      default: () => h('path', { d }, null),
    },
  );
} as FunctionalComponent;

Comment.displayName = 'Comment';

export default Comment;

