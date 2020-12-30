import { h } from 'vue'
import Icon from '../icon/icon'

import type { FunctionalComponent } from 'vue'

const Opportunity = function (props: any) {
  return h(Icon, props, {
    default: () => [
      h(
        'path',
        {
          d:
            'M384 960v-64h192.064v64H384zm448-544a350.656 350.656 0 01-128.32 271.424C665.344 719.04 640 763.776 640 813.504V832H320v-14.336c0-48-19.392-95.36-57.216-124.992a351.552 351.552 0 01-128.448-344.256c25.344-136.448 133.888-248.128 269.76-276.48A352.384 352.384 0 01832 416zm-544 32c0-132.288 75.904-224 192-224v-64c-154.432 0-256 122.752-256 288h64z',
        },
        null,
      ),
    ],
  })
} as FunctionalComponent

Opportunity.displayName = 'ElIconOpportunity'

export default Opportunity
